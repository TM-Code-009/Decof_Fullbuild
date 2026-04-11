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

app.use(cors());
app.use(express.json());

// API
app.use("/api/projects", projectRoutes);
app.use("/api/gallery", galleryRoutes);

// Serve frontend
const frontendPath = path.join(__dirname, "../public");
app.use(express.static(frontendPath));

// SPA fallback (EXPRESS 5 SAFE)
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 10000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT} 🚀`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();