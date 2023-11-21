-- CreateEnum
CREATE TYPE "Enum_TypePet" AS ENUM ('Cat', 'Dog', 'Bird', 'Conejo', 'Hamster');

-- CreateEnum
CREATE TYPE "Enum_Gender" AS ENUM ('Femenino', 'Masculino');

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "type" "Enum_TypePet" NOT NULL DEFAULT 'Cat',
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" "Enum_Gender" NOT NULL,
    "wight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pet_name_key" ON "Pet"("name");
