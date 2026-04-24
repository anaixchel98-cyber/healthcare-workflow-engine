# Healthcare Workflow Engine

Backend system that simulates how clinical operations process incoming events and update patient workflow state.

---

## Overview

Clinical teams often manage patient workflows across multiple disconnected tools:

- Email
- EHR systems
- Messaging apps
- Spreadsheets

This creates manual work, delays, and missed follow-ups.

This project demonstrates how operational signals can be transformed into structured, actionable workflow updates.

---

## Problem

Staff often had to manually:

- monitor inboxes and messages
- identify relevant information
- update patient status
- track next steps
- follow up across systems

The workflow depended heavily on human memory and context.

---

## Solution

This backend system:

1. Receives incoming operational events
2. Classifies the intent of the message
3. Determines the next workflow step
4. Updates the patient’s state automatically

---

## Workflow Example

```json
Input Event:
{
  "message": "Patient sent lab results"
}

Classified Intent:
"lab_results_received"

Updated Patient State:
"waiting_for_results"

### Events

**Create event**
```

POST /events

````

```json
{
  "patientId": "PATIENT_ID",
  "source": "email",
  "message": "Patient sent lab results"
}
````

---

## Run Locally

```bash
npm install
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## Tech Stack

- Node.js
- TypeScript
- Express
- Zod
- UUID

---

## Notes

- This project uses an in-memory data store (no database yet)
- Designed to simulate real-world healthcare workflows without exposing sensitive data
- No real patient data is used

---

## Future Improvements

- Add MongoDB persistence
- Add authentication
- Add audit logs for workflow changes
- Add more advanced NLP classification
- Add frontend dashboard

---

## What I Learned

The hardest part of building healthcare systems is not the code.

It is understanding real operational workflows.

Good systems reduce coordination effort and prevent things from falling through the cracks.

---

## Author

**Ana Ixchel Pérez Amezcua**  
Backend Developer | AI & Healthcare Systems

LinkedIn: https://www.linkedin.com/in/ana-ixchel-pérez-amezcua
