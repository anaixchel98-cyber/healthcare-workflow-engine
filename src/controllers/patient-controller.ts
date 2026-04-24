import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { patients, events } from "../data/store";
import type { Patient } from "../models/patient";

export function createPatient(req: Request, res: Response) {
  const { firstName, lastName, dateOfBirth } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({
      error: "firstName and lastName are required",
    });
  }

  const now = new Date().toISOString();

  const patient: Patient = {
    id: uuidv4(),
    firstName,
    lastName,
    dateOfBirth,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };

  patients.push(patient);

  return res.status(201).json(patient);
}

export function getPatients(_req: Request, res: Response) {
  return res.json(patients);
}

export function getPatientById(req: Request, res: Response) {
  const patient = patients.find((item) => item.id === req.params.id);

  if (!patient) {
    return res.status(404).json({
      error: "Patient not found",
    });
  }

  return res.json(patient);
}

export function getPatientTimeline(req: Request, res: Response) {
  const patient = patients.find((item) => item.id === req.params.id);

  if (!patient) {
    return res.status(404).json({
      error: "Patient not found",
    });
  }

  const timeline = events.filter((event) => event.patientId === patient.id);

  return res.json({
    patient,
    timeline,
  });
}
