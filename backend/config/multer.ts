import multer from "multer";
import path from "path";
import { Request } from "express";

// =====================
// STORAGE CONFIG
// =====================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder where images go
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// =====================
// FILE FILTER (IMAGES ONLY)
// =====================
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const ext = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mime = allowedTypes.test(file.mimetype);

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpg, png, webp)"));
  }
};

// =====================
// UPLOAD INSTANCE
// =====================
export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter,
});