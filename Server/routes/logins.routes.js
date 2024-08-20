import { Router } from "express";
import loginControllers from "../controllers/logins.controllers.js";
import registerControllers from "../controllers/registers.controllers.js";

const loginRouter = Router();
const {registerUser, getUsernames} = registerControllers;
const {loginUser} = loginControllers

loginRouter.route("/register")
    .post(registerUser)
    .get(getUsernames)
    

loginRouter.route("/login")
    .post(loginUser)

    export default loginRouter;