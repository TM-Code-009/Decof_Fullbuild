import { Request, Response } from "express";
import Gallery from "../models/gallery.model";

// CREATE IMAGE
export const createGalleryImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const image = await Gallery.create({
      image: `/uploads/${req.file.filename}`,
    });

    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({
      message: "Error uploading image",
      error,
    });
  }
};

// GET ALL IMAGES
export const getGalleryImages = async (req: Request, res: Response) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching images",
      error,
    });
  }
};