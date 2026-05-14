import express from "express";
import authRouter from "./routes/auth.routes.js";
import aiRouter from "./routes/ai.route.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/ai", aiRouter);

export default app;
