import { getReviewService } from "../services/ai.service.js";
import { AppError } from "../utils/AppError.js";

export const getReview = async (req, res, next) => {
  try {
    const { code } = req.body;

    if (!code) {
      return next(new AppError("CODE_IS_REQUIRED", 400));
    }

    const review = await getReviewService(code);

    res.status(200).json({
      success: true,
      data: { review },
    });
  } catch (err) {
    next(err);
  }
};