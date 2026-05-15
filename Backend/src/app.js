import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import aiRouter from "./routes/ai.route.js";
import startRouter from "./routes/start.route.js";
import { FRONTEND_URL } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/ai", aiRouter);
app.use("/api/home", startRouter);

app.use(errorHandler);

export default app;

