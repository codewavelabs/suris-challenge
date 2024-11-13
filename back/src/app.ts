import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import checkRoutes from "./routes/checkRoutes";
import historyRoutes from "./routes/historyRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// Route controllers
app.use("/api", checkRoutes);
app.use("/api", historyRoutes);

// Middlewares
app.use(errorHandler as any);

export default app;
