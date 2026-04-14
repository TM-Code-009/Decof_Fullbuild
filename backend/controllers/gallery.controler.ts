import { Request, Response } from "express";
import Gallery from "../models/gallery.model";

// CREATE IMAGE
export const uploadImage = async (req: Request, res: Response) => {
  try {
    console.log("FILE:", req.file); // 👈 ADD THIS

    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const image = req.file as any;

    const newImage = await Gallery.create({
      image: image.path, // Cloudinary URL
    });

    res.status(201).json(newImage);
  } catch (error: any) {
    console.error("GALLERY ERROR ❌", error); // 👈 IMPORTANT
    res.status(500).json({
      message: "Error uploading image",
      error: error.message, // 👈 RETURN REAL ERROR
    });
  }
};

export const getImages = async (req: Request, res: Response) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
};