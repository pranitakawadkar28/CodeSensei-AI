import express from "express";
import { loginSchema, registerSchema } from "../validators/auth.validators.js";
import { validate } from "../middleware/errorHandler.js";
import { loginController, registerController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post(
    "/register", 
    validate(registerSchema), 
    registerController
);

authRouter.post(
    "/login", 
    validate(loginSchema), 
    loginController
);

export default authRouter;