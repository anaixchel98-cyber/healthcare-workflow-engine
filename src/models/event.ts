export type EventSource = "email" | "message" | "call" | "document";

export type WorkflowIntent =
  | "lab_results_received"
  | "follow_up_needed"
  | "appointment_question"
  | "insurance_issue"
  | "unknown";

export interface WorkflowEvent {
  id: string;
  patientId: string;
  source: EventSource;
  message: string;
  intent: WorkflowIntent;
  createdAt: string;
}
