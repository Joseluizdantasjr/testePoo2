-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" REAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "leilaoId" TEXT NOT NULL,
    CONSTRAINT "Lance_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Leilao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
