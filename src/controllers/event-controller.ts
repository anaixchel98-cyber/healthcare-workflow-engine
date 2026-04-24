import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { patients, events } from "../data/store";
import type { WorkflowEvent } from "../models/event";
import { classifyWorkflowIntent } from "../services/workflow-classifier";
import { getNextPatientStatus } from "../services/workflow-engine";

export function createEvent(req: Request, res: Response) {
  const { patientId, source, message } = req.body;

  if (!patientId || !source || !message) {
    return res.status(400).json({
      error: "patientId, source, and message are required",
    });
  }

  const patient = patients.find((item) => item.id === patientId);

  if (!patient) {
    return res.status(404).json({
      error: "Patient not found",
    });
  }

  const intent = classifyWorkflowIntent(message);
  const nextStatus = getNextPatientStatus(intent);

  const event: WorkflowEvent = {
    id: uuidv4(),
    patientId,
    source,
    message,
    intent,
    createdAt: new Date().toISOString(),
  };

  events.push(event);

  patient.status = nextStatus;
  patient.updatedAt = new Date().toISOString();

  return res.status(201).json({
    event,
    updatedPatient: patient,
  });
}

export function getEvents(_req: Request, res: Response) {
  return res.json(events);
}
