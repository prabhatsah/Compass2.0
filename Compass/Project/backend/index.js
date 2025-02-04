import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./src/config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./src/routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
  path: ".env",
});

const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5174",
  credentials: true,
};
app.use(cors(corsOption));

//api
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Your message",
    success: true,
  });
});
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
