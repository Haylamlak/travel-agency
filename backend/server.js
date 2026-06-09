require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
console.log("DATABASE_URL =", process.env.DATABASE_URL);

// ✅ FIX CORS FOR NETLIFY FRONTEND
app.use(
  cors({
    origin: "https://futurefitagency.netlify.app",
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});