import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/projects.route";
import galleryRoutes from "./routes/gallery.routes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =====================
// ✅ API ROUTES
// =====================
app.use("/api/projects", projectRoutes);
app.use("/api/gallery", galleryRoutes);

// =====================
// ✅ STATIC FILES
// =====================

// 👉 Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// 👉 Serve frontend (React build inside backend/public)
const frontendPath = path.join(__dirname, "../public");
app.use(express.static(frontendPath));

// =====================
// ✅ SPA FALLBACK (VERY IMPORTANT)
// =====================
app.get("*", (_req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// =====================
// ✅ SERVER START
// =====================
const PORT = process.env.PORT || 10000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();