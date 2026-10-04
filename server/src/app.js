const express = require("express");
const cors = require("cors");
const pageRoutes = require("./routes/pageRoutes");

const app = express();

const allowedOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "pagepilot-mern-poc" });
});

app.use("/api/pages", pageRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

module.exports = app;
