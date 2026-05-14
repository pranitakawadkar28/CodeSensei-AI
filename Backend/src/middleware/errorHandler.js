import { ZodError } from "zod";
import { AppError } from "../utils/AppError.js";

export const errorHandler = (err, req, res, next) => {
  // Zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.flatten().fieldErrors,
    });
  }

  // AppError — operational errors (auth, not found, etc.)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown errors — use console.error to capture full stack trace
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return next(result.error);
  }
  req.body = result.data;
  next();
};