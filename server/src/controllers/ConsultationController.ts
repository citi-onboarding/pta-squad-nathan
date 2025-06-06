  import { Request, Response } from 'express';
  import { Citi, Crud } from '../global';
  import prisma from '@database';

  class ConsultationController implements Crud {
      constructor(private readonly citi = new Citi('Consultation', 'id')) {}

    create = async (request: Request, response: Response) => {
    const { date, time, doctorName, consultationType, patientId, description } = request.body;

    console.log("Dados recebidos:", request.body);

    // Verifica campos obrigatórios (patientId é opcional)
    const isAnyUndefined = this.citi.areValuesUndefined(
      date,
      time,
      doctorName,
      consultationType,
      description
    );

    if (isAnyUndefined) {
      console.error("Campos undefined:", { date, time, doctorName, consultationType, description });
      return response.status(400).json({ 
        message: "Todos os campos obrigatórios devem ser preenchidos (date, time, doctorName, consultationType, description)" 
      });
    }

    // Valida o consultationType contra 
    const validTypes = ["FIRST", "VACINATION", "RETURN", "CHECKUP"];
    if (!validTypes.includes(consultationType)) {
      return response.status(400).json({
        message: "Tipo de consulta inválido. Use: FIRST, VACINATION, RETURN ou CHECKUP",
      });
    }

    try {
      // Formata os dados para o modelo do Prisma
      const datetime = new Date(`${date}T${time}:00`);
      const prismaData = {
        datetime,
        type: consultationType,
        doctorName,
        description,
        patientId: patientId || null, 
      };

      const { httpStatus, message } = await this.citi.insertIntoDatabase(prismaData);
      return response.status(httpStatus).json({ message });
    } catch (error) {
      console.error("Erro no banco de dados:", error);
      return response.status(500).json({ 
        message: "Erro interno ao processar a consulta",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };
      get = async (request: Request, response: Response) => {
          try {
              const { httpStatus, values } = await this.citi.getAll();
              return response.status(httpStatus).json(values);
          } catch (error) {
              console.error('Erro ao buscar consultas:', error);
              return response.status(500).json({ 
                  message: 'Erro ao recuperar consultas' 
              });
          }
      };

      getById = async (request: Request, response: Response) => {
  try {
    const { idPaciente } = request.params;

    if (!idPaciente) {
      return response.status(400).json({ message: "ID do paciente é obrigatório." });
    }

    const pacienteComConsultas = await prisma.patient.findUnique({
      where: {
        idPaciente: Number(idPaciente),
      },
      include: {
        consultations: true, // pega todas as consultas do paciente
      },
    });

    if (!pacienteComConsultas) {
      return response.status(404).json({ message: "Paciente não encontrado." });
    }

    const respostaFormatada = {
      paciente: {
        nome: pacienteComConsultas.name,
        idade: pacienteComConsultas.age.toString(),
        dono: pacienteComConsultas.tutorName,
        especie: pacienteComConsultas.species,
        genero: pacienteComConsultas.gender,
      },
      consultas: pacienteComConsultas.consultations.map(consulta => ({
        data: consulta.datetime.toISOString().split('T')[0],
        hora: consulta.datetime.toTimeString().split(' ')[0],
        tipo: consulta.type,
        medico: consulta.doctorName,
        descricao: consulta.description,
      })),
    };

    return response.status(200).json(respostaFormatada);
  } catch (error) {
    console.error("Erro ao buscar paciente:", error);
    return response.status(500).json({
      message: "Erro interno no servidor.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

      delete = async (request: Request, response: Response) => {
          try {
              const { id } = request.params;
              const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);
              return response.status(httpStatus).json({ message: messageFromDelete });
          } catch (error) {
              console.error('Erro ao deletar consulta:', error);
              return response.status(500).json({ 
                  message: 'Erro ao deletar consulta' 
              });
          }
      };

      update = async (request: Request, response: Response) => {
          try {
              const { id } = request.params;
              const { date, time, doctorName, consultationType,patientId } = request.body;
              
              // Formata os dados para atualização
              const datetime = new Date(`${date}T${time}:00`);
              const updatedValues = {
                  datetime,
                  type: consultationType,
                  doctorName,
                  description: "Consulta atualizada via sistema"
              };

              const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
                  id,
                  updatedValues
              );
              
              return response.status(httpStatus).json({ message: messageFromUpdate });
              
          } catch (error) {
              console.error('Erro ao atualizar consulta:', error);
              return response.status(500).json({ 
                  message: 'Erro ao atualizar consulta',
                  error: error instanceof Error ? error.message : String(error)
              });
          }
      };
  }

  export default new ConsultationController();