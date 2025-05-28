import { Request, Response } from "express";
import { Citi, Crud } from "../global";

// Classe RegisterController implementa a interface CRUD para gerenciar animais
class RegisterController implements Crud {
  constructor(private readonly citi = new Citi("Animal")) {}
  // Método para criar um novo animal no banco de dados
  create = async (request: Request, response: Response) => {
    const { patientName,
        tutorName,
        patientSpecies,
        patientAge,
        typeConsultation,
        responsibleDoctor,
        dateService,
        timeService,
        problemDescription
    } = request.body;

    // Verifica se algum dos campos obrigatórios não foi preenchido
    const isAnyUndefined = this.citi.areValuesUndefined(
        patientName,
        tutorName,
        patientSpecies,
        patientAge,
        typeConsultation,
        responsibleDoctor,
        dateService,
        timeService,
        problemDescription
    );
    if (isAnyUndefined) return response.status(400).send();

    // Cria um novo objeto de animal com os dados fornecidos
    // e insere no banco de dados
    const newAnimal = { patientName, tutorName, patientSpecies, patientAge, typeConsultation, responsibleDoctor, dateService, timeService, problemDescription };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newAnimal);
    // Retorna a resposta com o status HTTP e a mensagem de sucesso ou erro
    return response.status(httpStatus).send({ message });
  };
  // Método para obter todos os animais do banco de dados
  get = async (request: Request, response: Response) => {
    const {httpStatus, values} = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };
  // Método para deletar um animal do banco de dados
  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  // Método para atualizar os dados de um animal no banco de dados
  update = async (request: Request, response: Response) => {
    const { id } = request.params

    const { patientName,
        tutorName,
        patientSpecies,
        patientAge,
        typeConsultation,
        responsibleDoctor,
        dateService,
        timeService,
        problemDescription
    } = request.body;

    const updatedValues = { patientName,
      tutorName,
      patientSpecies,
      patientAge,
      typeConsultation,
      responsibleDoctor,
      dateService,
      timeService,
      problemDescription };

    const  { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );
    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new RegisterController();
