import express, { Request, Response } from "express";
import cors from "cors";
import eventRoutes from "./routes/event.route";

const app = express();

app.use(
  cors({
    origin: "https://event-scheduler-alpha.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use("/events", eventRoutes);

//Checking and running
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my Mini Event Scheduler");
});

export default app;
