import express from "express";
import cors from "cors";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// GET route for testing
app.get("/", (req, res) => {
  res.send("test get");
});

// POST route for chat testing
app.post("/api/chat", (req, res) => {
  console.log("Received POST request:", req.body);
  const message = req.body?.message || "nothing";
  res.json({ reply: `You said: ${message}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
