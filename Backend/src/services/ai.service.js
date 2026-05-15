import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_GEMINI_KEY } from "../config/env.js";

const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-flash-latest"
});

export const getReviewService = async (code) => {
  if (!code) {
    throw new Error("No code provided for review");
  }

  const prompt = `
    You are an expert Senior Code Reviewer. Analyze the following code for:
    1. Bugs and logical errors.
    2. Security vulnerabilities.
    3. Performance improvements.
    4. Best practices and readability.

    Provide your review in professional Markdown format. Use clear headings and bullet points.

    Code to review:
    \`\`\`
    ${code}
    \`\`\`
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error("AI returned an empty response");
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error(`AI Review Failed: ${error.message}`);
  }
};