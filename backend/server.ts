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

// =====================
// ✅ MIDDLEWARE
// =====================
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

// Serve uploads
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Serve frontend
const frontendPath = path.join(process.cwd(), "frontend/dist");
app.use(express.static(frontendPath));

// =====================
// ✅ FIXED SPA FALLBACK (EXPRESS v5 SAFE)
// =====================
app.use((req, res) => {
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