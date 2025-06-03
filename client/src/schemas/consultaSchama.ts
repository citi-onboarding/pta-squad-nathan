import { z } from "zod";

export const consultaFormSchema = z.object({
  consultationType: z.enum(["FIRST", "VACINATION", "RETURN", "CHECKUP"], {
    errorMap: () => ({ message: "Selecione um tipo de consulta válido." }),
  }),
  doctorName: z.string().min(1, "O nome do médico é obrigatório."),
  date: z.string().min(1, "A data é obrigatória."),
  time: z.string().min(1, "O horário é obrigatório."),
  patientId: z.number().optional(), 
});

export type ConsultaFormData = z.infer<typeof consultaFormSchema>;