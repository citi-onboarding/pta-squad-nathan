/*
  Warnings:

  - Changed the type of `type` on the `Consultation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `species` on the `Patient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `Patient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PatientSpecie" AS ENUM ('SHEEP', 'CAT', 'PIG', 'COW', 'HORSE', 'DOG');

-- CreateEnum
CREATE TYPE "ConsType" AS ENUM ('FIRST', 'VACINATION', 'RETURN', 'CHECKUP');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_patientId_fkey";

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "type",
ADD COLUMN     "type" "ConsType" NOT NULL,
ALTER COLUMN "patientId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "species",
ADD COLUMN     "species" "PatientSpecie" NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("idPaciente") ON DELETE SET NULL ON UPDATE CASCADE;
