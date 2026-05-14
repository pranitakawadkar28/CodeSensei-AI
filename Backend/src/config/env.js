import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = [
  "MONGODB_URL",
  "PORT",
  "JWT_SECRET",
  "NODE_ENV",
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
export const NODE_ENV = process.env.NODE_ENV;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;