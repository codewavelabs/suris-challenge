import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import checkRoutes from "./routes/checkRoutes";

const app = express();
app.use(express.json());

// Route controllers
app.use("/api", checkRoutes);

// Middlewares
app.use(errorHandler as any);

export default app;
