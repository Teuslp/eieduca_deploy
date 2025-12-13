"use server"

import { z } from "zod"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma" // Certifique-se de ter criado o lib/prisma.ts

const RegisterSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
})

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // 1. Validação
  const validated = RegisterSchema.safeParse({ name, email, password })
  if (!validated.success) {
    return { error: "Dados inválidos. Verifique os campos." }
  }

  // 2. Verifica duplicidade
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return { error: "Email já cadastrado." }
  }

  // 3. Criptografia
  const hashedPassword = await bcrypt.hash(password, 10)

  // 4. Salvar no Banco
  try {
    await prisma.user.create({
      data: { name, email, password: hashedPassword },
    })
    return { success: true }
  } catch (err) {
    return { error: "Erro ao criar conta." }
  }
}