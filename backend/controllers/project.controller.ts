import { Request, Response } from "express";
import Project from "../models/project.model";

// CREATE PROJECT
export const createProject = async (req: Request, res: Response) => {
  try {
    console.log("FILE:", req.file);

    const { title, client, desc, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image upload failed" });
    }

    const shortDesc = desc.split(" ").slice(0, 4).join(" ") + "...";

    const project = await Project.create({
      title,
      client,
      desc,
      shortDesc,
      category,
      image: (req.file as any).path, // Cloudinary URL
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("PROJECT ERROR:", error);
    res.status(500).json({ message: "Error creating project" });
  }
};

// GET ALL PROJECTS
export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching projects",
      error,
    });
  }
};

export const getOneProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching project",
      error,
    });
  }
};