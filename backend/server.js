import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const client = new  OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("test get");
})

// POST route for chat testing
app.post("/api/chat", async(req, res) => {

  try {
    const message = req.body?.message || "nothing";

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a Plant AI expert. Answer simply and helpfully."},
        { role: "user", content: message },
      ]
    });

    const aiReply = response.choices[0].message.content;
    console.log("AI reply:", aiReply);

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("Error in chat", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
