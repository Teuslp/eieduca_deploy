-- CreateTable
CREATE TABLE "professor" (
    "id_professor" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "rede_ensino" VARCHAR(255),

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "curso" (
    "id_curso" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "carga_horaria" INTEGER,
    "area_foco" VARCHAR(255),

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "tecnologia_assistiva" (
    "id_ta" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "categoria" VARCHAR(255),

    CONSTRAINT "tecnologia_assistiva_pkey" PRIMARY KEY ("id_ta")
);

-- CreateTable
CREATE TABLE "modulo" (
    "id_modulo" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "ordem" INTEGER,

    CONSTRAINT "modulo_pkey" PRIMARY KEY ("id_modulo")
);

-- CreateTable
CREATE TABLE "conteudo" (
    "id_conteudo" SERIAL NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "tipo_conteudo" VARCHAR(255),

    CONSTRAINT "conteudo_pkey" PRIMARY KEY ("id_conteudo")
);

-- CreateTable
CREATE TABLE "certificacao" (
    "id_certificado" SERIAL NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "data_emissao" DATE NOT NULL,

    CONSTRAINT "certificacao_pkey" PRIMARY KEY ("id_certificado")
);

-- CreateTable
CREATE TABLE "relacao_conteudo_ta" (
    "id_conteudo" INTEGER NOT NULL,
    "id_ta" INTEGER NOT NULL,

    CONSTRAINT "relacao_conteudo_ta_pkey" PRIMARY KEY ("id_conteudo","id_ta")
);

-- CreateTable
CREATE TABLE "progresso_curso" (
    "id_professor" INTEGER NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "status" VARCHAR(100) NOT NULL,

    CONSTRAINT "progresso_curso_pkey" PRIMARY KEY ("id_professor","id_curso")
);

-- CreateTable
CREATE TABLE "progresso_conteudo" (
    "id_professor" INTEGER NOT NULL,
    "id_conteudo" INTEGER NOT NULL,
    "concluido" BOOLEAN DEFAULT false,

    CONSTRAINT "progresso_conteudo_pkey" PRIMARY KEY ("id_professor","id_conteudo")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'STUDENT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_key" ON "professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "modulo" ADD CONSTRAINT "fk_modulo_curso" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conteudo" ADD CONSTRAINT "fk_conteudo_modulo" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "certificacao" ADD CONSTRAINT "fk_certificacao_professor" FOREIGN KEY ("id_professor") REFERENCES "professor"("id_professor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "certificacao" ADD CONSTRAINT "fk_certificacao_curso" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relacao_conteudo_ta" ADD CONSTRAINT "fk_rel_conteudo" FOREIGN KEY ("id_conteudo") REFERENCES "conteudo"("id_conteudo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relacao_conteudo_ta" ADD CONSTRAINT "fk_rel_ta" FOREIGN KEY ("id_ta") REFERENCES "tecnologia_assistiva"("id_ta") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progresso_curso" ADD CONSTRAINT "fk_prog_curso_prof" FOREIGN KEY ("id_professor") REFERENCES "professor"("id_professor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progresso_curso" ADD CONSTRAINT "fk_prog_curso_curso" FOREIGN KEY ("id_curso") REFERENCES "curso"("id_curso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progresso_conteudo" ADD CONSTRAINT "fk_prog_cont_prof" FOREIGN KEY ("id_professor") REFERENCES "professor"("id_professor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progresso_conteudo" ADD CONSTRAINT "fk_prog_cont_cont" FOREIGN KEY ("id_conteudo") REFERENCES "conteudo"("id_conteudo") ON DELETE NO ACTION ON UPDATE NO ACTION;
