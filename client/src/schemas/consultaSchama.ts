import { z } from "zod";

export const consultaFormSchema = z.object({
  consultationType: z.string().min(1, 'Selecione o tipo de consulta.'),
  doctorName: z.string().min(1, 'O nome do médico é obrigatório.'),
  date: z.string().min(1, 'A data é obrigatória.'),
  time: z.string().min(1, 'O horário é obrigatório.'),
  patientId: z.number().min(1, 'ID do paciente é obrigatório') // Adicionado
});

export type ConsultaFormData = z.infer<typeof consultaFormSchema>;