import { loginService, registerService } from "../services/auth.service.js";

export const registerController = async (req, res, next) => {
  try {
    const { user } = await registerService(req.body);

    res.status(201).json({
      success: true,
      message: "USER_REGISTERED_SUCCESSFULLY",
      data: {
        user: user.toJSON(),
      },
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { user } = await loginService(req.body);
 
    res.status(200).json({
      success: true,
      message: "USER_LOGGED_IN_SUCCESSFULLY",
      data: {
        user: user.toJSON(),
      },
    });
  } catch (err) {
    next(err);
  }
};