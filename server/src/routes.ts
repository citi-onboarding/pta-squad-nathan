import express from "express";
import userController from "./controllers/UserController";

import ConsultationController from "./controllers/ConsultationController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/consultas", ConsultationController.create);
routes.get("/consultas", ConsultationController.get);
routes.delete("/consultas/:id", ConsultationController.delete);
routes.patch("/consultas/:id", ConsultationController.update);
export default routes;
