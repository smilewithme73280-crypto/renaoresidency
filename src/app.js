import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pgData from "./data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const staticDir = path.join(__dirname, "..", "dist");

app.use(express.json());
app.use(express.static(staticDir));

app.get("/api/pg", (req, res) => {
    res.json(pgData);
});

app.get("/api/visiting-card", (req, res) => {
    res.json(pgData.visitingCard);
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
});

export default app;
