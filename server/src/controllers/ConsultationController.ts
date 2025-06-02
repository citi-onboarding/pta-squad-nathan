import { Request, Response } from 'express';
import { Citi, Crud } from '../global';

class ConsultationController implements Crud {
    constructor(private readonly citi = new Citi('Consultation')) {}

    create = async (request: Request, response: Response) => {
        const { date, time, doctorName, consultationType } = request.body;

        console.log('Dados recebidos:', request.body);

        // Verifica campos obrigatórios
        const isAnyUndefined = this.citi.areValuesUndefined(
            date,
            time,
            doctorName,
            consultationType,
        );

        if (isAnyUndefined) {
            console.error('Campos undefined:', { date, time, doctorName, consultationType });
            return response.status(400).json({ 
                message: 'Todos os campos são obrigatórios' 
            });
        }

        try {
            // Formata os dados para o modelo do Prisma
            const datetime = new Date(`${date}T${time}:00`);
            const prismaData = {
                datetime,
                type: consultationType,
                doctorName,
                description: "Consulta agendada via sistema", // Valor padrão
            };

            const { httpStatus, message } = await this.citi.insertIntoDatabase(prismaData);
            return response.status(httpStatus).json({ message });
            
        } catch (error) {
            console.error('Erro no banco de dados:', error);
            return response.status(500).json({ 
                message: 'Erro interno ao processar a consulta',
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }

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