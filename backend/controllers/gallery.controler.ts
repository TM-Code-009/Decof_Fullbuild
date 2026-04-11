import { Request, Response } from "express";
import Gallery from "../models/gallery.model";

// CREATE IMAGE
export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const image = await Gallery.create({
      image: (req.file as any).path,
    });

    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
};

export const getImages = async (req: Request, res: Response) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
};