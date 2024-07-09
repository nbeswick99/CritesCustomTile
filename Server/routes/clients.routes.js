import { Router } from "express";
import clientControllers from "../controllers/clients.controllers.js";

const router = Router();
const {createClient, getAllClients, getOneClient, updateOneClient, deleteOneClient} = clientControllers

router.route("/clients")
    .post(createClient)
    .get(getAllClients);

router.route("/clients/:id")
    .get(getOneClient)
    .put(updateOneClient)
    .delete(deleteOneClient);

    export default router;
