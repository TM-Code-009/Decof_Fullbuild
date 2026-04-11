import express from "express";
import { upload } from "../config/multer";
import {
  uploadImage,getImages
} from "../controllers/gallery.controler";

const router = express.Router();

router.post("/", upload.single("image"), uploadImage);
router.get("/", getImages);

export default router;