import express from "express";

const startRouter = express.Router();

startRouter.get("/connect", (req, res) => {
  res.status(200).send("ready");
});

export default startRouter;

