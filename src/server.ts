import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patient-routes";
import eventRoutes from "./routes/event-routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "healthcare-workflow-engine",
  });
});

app.use("/patients", patientRoutes);
app.use("/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`Healthcare Workflow Engine running on port ${PORT}`);
});
