import express from "express";
import userController from "./controllers/UserController";
import PatientController from "./controllers/PatientController";
import ConsultationController from "./controllers/ConsultationController";

import { sendMail } from "./controllers/mailController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/registro", PatientController.create);
routes.get("/registro", PatientController.get);
routes.delete("/registro/:idPaciente", PatientController.delete);
routes.patch("/registro/:idPaciente", PatientController.update);

routes.post("/consultas", ConsultationController.create);
routes.get("/consultas", ConsultationController.get);
routes.delete("/consultas/:id", ConsultationController.delete);
routes.patch("/consultas/:id", ConsultationController.update);

routes.post("/send-email", sendMail);

export default routes;
