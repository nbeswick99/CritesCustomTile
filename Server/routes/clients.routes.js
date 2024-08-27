import { Router } from "express";
import clientControllers from "../controllers/clients.controllers.js";
import requireAuth from "../middleware/requireAuth.js";

const clientRouter = Router();
const {createClient, getAllClients, getOneClient, updateOneClient, deleteOneClient} = clientControllers

//No auth
clientRouter.route("/clients")
    .post(createClient);

//router authentication middleware
clientRouter.use(requireAuth)

//Auth Applied
clientRouter.route("/clients")
    .get(getAllClients);


clientRouter.route("/clients/:id")
    .get(getOneClient)
    .put(updateOneClient)
    .delete(deleteOneClient);

    export default clientRouter;
