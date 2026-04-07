import express from "express";
import { upload } from "../config/multer";
import {
  createGalleryImage,
  getGalleryImages,
} from "../controllers/gallery.controler";

const router = express.Router();

router.post("/", upload.single("image"), createGalleryImage);
router.get("/", getGalleryImages);

export default router;