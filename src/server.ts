import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use;
app.listen(PORT, () => {
  console.log(`Event Scheduler Server is running on port ${PORT}`);
});
