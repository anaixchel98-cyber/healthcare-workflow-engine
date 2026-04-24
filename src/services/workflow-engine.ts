import type { PatientStatus } from "../models/patient";
import type { WorkflowIntent } from "../models/event";

export function getNextPatientStatus(intent: WorkflowIntent): PatientStatus {
  switch (intent) {
    case "lab_results_received":
      return "waiting_for_results";

    case "follow_up_needed":
      return "needs_follow_up";

    case "appointment_question":
      return "needs_follow_up";

    case "insurance_issue":
      return "insurance_review";

    case "unknown":
    default:
      return "pending";
  }
}
