import { Router } from "express";
import {createClient, getAllClients, getOneClient, updateOneClient, deleteOneClient } from "../controllers/clients.controller.js";
const router = Router();

router.route("/clients")
    .post(createClient)
    .get(getAllClients);

router.route("/clients/:id")
    .get(getOneClient)
    .put(updateOneClient)
    .delete(deleteOneClient);

    export default router;
