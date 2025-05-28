# Documentação do Prisma

Este documento descreve o funcionamento do schema.prisma para modelagem de banco de dados.

---

## 📁 Estrutura dos Arquivos:

```bash
/server/
  /.env
  /prisma/
  /schema.prisma
  /migrations/
  /migration_lock.toml
  /20250527233342_add_model_patient_and_add_model_consultation/
  /migratoin.sql
```

---

## 📌 Descrição Geral:

O arquivo principal é o schema.prisma, que elabora uma relação one-to-many entre o paciente e a consulta.

```prisma
generator client {
provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Patient {
  idPaciente   Int    @id @default(autoincrement())
  name         String
  tutorName    String
  age          Int
  species      String
  gender       String

  consultations Consultation[]  // one-to-many relationship
}

model Consultation {
  idConsulta   Int    @id @default(autoincrement())
  doctorName   String
  datetime     DateTime
  type         String
  description  String

  patientId    Int
  patient      Patient @relation(fields: [patientId], references: [idPaciente])
}

```

---

## 📝 Descrição:

O schema define dois modelos: Patient e Consultation. O modelo Patient representa pacientes, com campos como idPaciente (chave primária com incremento automático), name (nome do paciente), tutorName (nome do tutor), age (idade), species (espécie do animal) e gender (gênero). Além disso, ele possui um relacionamento de one-to-many com o modelo Consultation, indicando que um paciente pode ter várias consultas associadas.

Já o modelo Consultation representa uma consulta veterinária, com campos como idConsulta (chave primária com incremento automático), doctorName (nome do médico veterinário), datetime (data e hora da consulta), type (tipo de consulta) e description (descrição da consulta). Cada consulta está associada a exatamente um paciente por meio da chave estrangeira patientId, que referencia o campo idPaciente do modelo Patient. Essa relação é configurada com o atributo @relation.
