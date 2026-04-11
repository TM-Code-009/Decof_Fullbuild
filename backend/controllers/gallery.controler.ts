import { Request, Response } from "express";
import Gallery from "../models/gallery.model";

// CREATE IMAGE
export const uploadImage = async (req: Request, res: Response) => {
  try {
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const image = await Gallery.create({
      image: (req.file as any).path,
    });

    res.status(201).json(image);
  } catch (error) {
    console.error("GALLERY ERROR:", error);
    res.status(500).json({ message: "Upload failed" });
  }
};

export const getImages = async (req: Request, res: Response) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
};