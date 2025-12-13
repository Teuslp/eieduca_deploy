import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

import "./globals.css";

import { PreferencesProvider } from "./contexts/PreferencesContext";
import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "EiEduca+ - Educação Inclusiva e Acessível",
  description:
    "Plataforma de educação inclusiva com tecnologia assistiva e metodologias ativas",
  icons: {
    icon: "/logo-inicio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <AuthProvider>
          <PreferencesProvider>
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </PreferencesProvider>
        </AuthProvider>

        <Analytics />
      </body>
    </html>
  );
}
