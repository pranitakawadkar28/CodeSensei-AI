import express from "express";
import { registerSchema } from "../validators/auth.validators.js";
import { validate } from "../middleware/errorHandler.js";
import { registerController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post(
    "/register", 
    validate(registerSchema), 
    registerController
);


export default authRouter;