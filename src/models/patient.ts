export type PatientStatus =
  | "pending"
  | "needs_follow_up"
  | "waiting_for_results"
  | "completed"
  | "insurance_review";

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  status: PatientStatus;
  createdAt: string;
  updatedAt: string;
}
