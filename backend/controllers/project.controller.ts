import { Request, Response } from "express";
import Project from "../models/project.model";

// CREATE PROJECT
export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, client, desc, category } = req.body;

    if (!title || !client || !desc || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check image
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const shortDesc = desc.split(" ").slice(0, 4).join(" ") + "...";

    const project = await Project.create({
      title,
      client,
      desc,
      shortDesc,
      category,
      image: `/uploads/${req.file.filename}`, // ✅ ADD THIS
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error creating project",
      error,
    });
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