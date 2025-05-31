import express from "express";
import userController from "./controllers/UserController";
import PatientController from "./controllers/PatientController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/registro", PatientController.create);
routes.get("/registro", PatientController.get);
routes.delete("/registro/:id", PatientController.delete);
routes.patch("/registro/:id", PatientController.update);

export default routes;
