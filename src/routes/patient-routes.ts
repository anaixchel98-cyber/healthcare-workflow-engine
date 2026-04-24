import { Router } from "express";
import {
  createPatient,
  getPatientById,
  getPatients,
} from "../controllers/patient-controller";

const router = Router();

router.post("/", createPatient);
router.get("/", getPatients);
router.get("/:id", getPatientById);

export default router;
