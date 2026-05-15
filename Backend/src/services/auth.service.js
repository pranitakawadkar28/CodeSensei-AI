import { User } from "../models/user.model.js";
import { AppError } from "../utils/AppError.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
};

export const registerService = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new AppError("PLEASE_PROVIDE_USERNAME, EMAIL, PASSWORD", 400);
  }

  const isUserAlreadyExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    throw new AppError("USER_ALREADY_EXISTS", 409);
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id);

  return { user, token };
};

export const loginService = async ({ email, password }) => {
  if (!email || !password) {
    throw new AppError("PLEASE_PROVIDE_EMAIL_AND_PASSWORD", 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("INVALID_CREDENTIALS", 401);
  }

  const isMatched = await comparePassword(password, user.password);

  if (!isMatched) {
    throw new AppError("INVALID_CREDENTIALS", 401);
  }

  const token = generateToken(user._id);

  return { user, token };
};
