const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const ChatBoat = async (req, res) => {
  const { message } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`You are a skincare assistant helping users pick products on a derma e-commerce site. User concern: "${message}"`);
    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Gemini AI request failed" });
  }
};

module.exports = { ChatBoat };
