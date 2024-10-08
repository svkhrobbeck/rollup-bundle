import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ path: req.url, ok: true });
});

app.listen(3001, () => console.log(`server is running on port: 3001`));
