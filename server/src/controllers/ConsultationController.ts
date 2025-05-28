import { Request, Response } from 'express';
import { Citi, Crud } from '../global';

class ConsultationController implements Crud {
    constructor(private readonly citi = new Citi('Consultation')) {}
    create = async (request: Request, response: Response) => {
        const { date, patientName, doctorName, consultationType } = request.body;
        const isAnyUndefined = this.citi.areValuesUndefined(
            date,
            patientName,
            doctorName,
            consultationType,
        );
        if (isAnyUndefined) return response.status(400).send();
        const newConsultation = { date, patientName, doctorName, consultationType };
        const { httpStatus, message } = await this.citi.insertIntoDatabase(newConsultation);

        return response.status(httpStatus).send({ message });


    }

    get = async (request: Request, response: Response) => {
        const { httpStatus, values } = await this.citi.getAll();

        return response.status(httpStatus).send(values);
    };

    delete = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);
        return response.status(httpStatus).send({ messageFromDelete });
    };

    update = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { date, patientName, doctorName, consultationType } = request.body;

        const updatedValues = { date, patientName, doctorName, consultationType };

        const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
        id,
        updatedValues
    );


}
}
export default new ConsultationController();








// export const ConsultationController = {
//     create: async (request: Request, response: Response) => {
//         try {
//             const {date, patientName, doctorName, consultationType} = request.body;
//             console.log ('Dados da consulta:',{date, patientName, doctorName, consultationType});

//             return response.status(201).json({ message: 'Consulta criada com sucesso' });
//         }
        
        
//         catch (error) {
//             return response.status(500).json({ message: 'Erro ao criar consulta' }); 
            
//         }



// },
// }