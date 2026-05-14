import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = [
  "MONGODB_URL",
  "PORT",
  "FRONTEND_URL",
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
