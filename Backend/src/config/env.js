import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = [
  "MONGODB_URL",
  "PORT",
  "FRONTEND_URL",
  "GOOGLE_GEMINI_KEY",
  "JWT_SECRET"
];

const missing = requiredEnvVars.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missing.join(", ")}`,
  );
}

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const GOOGLE_GEMINI_KEY = process.env.GOOGLE_GEMINI_KEY;
export const JWT_SECRET = process.env.JWT_SECRET;