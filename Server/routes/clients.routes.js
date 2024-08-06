import { Router } from "express";
import clientControllers from "../controllers/clients.controllers.js";

const clientRouter = Router();
const {createClient, getAllClients, getOneClient, updateOneClient, deleteOneClient} = clientControllers

clientRouter.route("/clients")
    .post(createClient)
    .get(getAllClients);

clientRouter.route("/clients/:id")
    .get(getOneClient)
    .put(updateOneClient)
    .delete(deleteOneClient);

    export default clientRouter;
