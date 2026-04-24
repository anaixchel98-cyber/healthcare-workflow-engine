import { Router } from "express";
import {
  createPatient,
  getPatientById,
  getPatientTimeline,
  getPatients,
} from "../controllers/patient-controller";

const router = Router();

router.post("/", createPatient);
router.get("/", getPatients);

// Important: this route must go before "/:id"
router.get("/:id/timeline", getPatientTimeline);

router.get("/:id", getPatientById);

export default router;
