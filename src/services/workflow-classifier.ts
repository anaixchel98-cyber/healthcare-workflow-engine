import type { WorkflowIntent } from "../models/event";

export function classifyWorkflowIntent(message: string): WorkflowIntent {
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("lab") ||
    normalizedMessage.includes("results") ||
    normalizedMessage.includes("blood work")
  ) {
    return "lab_results_received";
  }

  if (
    normalizedMessage.includes("follow up") ||
    normalizedMessage.includes("callback") ||
    normalizedMessage.includes("call back")
  ) {
    return "follow_up_needed";
  }

  if (
    normalizedMessage.includes("appointment") ||
    normalizedMessage.includes("schedule") ||
    normalizedMessage.includes("reschedule")
  ) {
    return "appointment_question";
  }

  if (
    normalizedMessage.includes("insurance") ||
    normalizedMessage.includes("eligibility") ||
    normalizedMessage.includes("coverage")
  ) {
    return "insurance_issue";
  }

  return "unknown";
}
