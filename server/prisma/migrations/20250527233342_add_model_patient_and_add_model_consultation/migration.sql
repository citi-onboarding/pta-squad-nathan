-- CreateTable
CREATE TABLE "Patient" (
    "idPaciente" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "species" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("idPaciente")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "idConsulta" SERIAL NOT NULL,
    "doctorName" TEXT NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("idConsulta")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;
