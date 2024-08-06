import { Router } from "express";
import loginControllers from "../controllers/logins.controllers.js";

const loginRouter = Router();
const {createLogin, getAllLogins, getOneLogin, updateOneLogin, deleteOneLogin} = loginControllers

loginRouter.route("/logins")
    .post(createLogin)
    .get(getAllLogins);

loginRouter.route("/logins/:id")
    .get(getOneLogin)
    .put(updateOneLogin)
    .delete(deleteOneLogin);

    export default loginRouter;