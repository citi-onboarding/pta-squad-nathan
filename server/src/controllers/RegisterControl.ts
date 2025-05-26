import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class RegisterController implements Crud {
  constructor(private readonly citi = new Citi("Animal")) {}
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

    const newAnimal = { patientName, tutorName, patientSpecies, patientAge, typeConsultation, responsibleDoctor, dateService, timeService, problemDescription };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newAnimal);

    return response.status(httpStatus).send({ message });
  };
}

export default new RegisterController();
