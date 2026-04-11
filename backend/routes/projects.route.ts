import { Router } from "express";
import { upload } from "../middleware/multerCloudinary";
import { createProject, getOneProject, getProjects } from "../controllers/project.controller";

const router = Router();


router.post("/", upload.single("image"), createProject);
router.get("/", getProjects);
router.get("/:id", getOneProject);

export default router;