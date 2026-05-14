import express from "express";
import { getReview } from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post(
    "/review", 
    getReview
);


export default aiRouter;