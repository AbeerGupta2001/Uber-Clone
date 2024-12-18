import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRoutes from './routes/captain.routes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

app.use("/users", userRoutes);
app.use("/captains",captainRoutes)

app.get("/", (req, res) => {
  res.send("Hi Abeer");
});

export default app;
