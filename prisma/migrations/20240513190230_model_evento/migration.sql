-- CreateTable
CREATE TABLE "eventos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "excluido" BOOLEAN NOT NULL DEFAULT false,
    "publico" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);
