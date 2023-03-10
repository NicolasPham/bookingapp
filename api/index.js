import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';

/*****Router imported *****/
import authRoutes from "./routes/auth.js";
import hotelRoutes from "./routes/hotels.js";
import roomRoutes from "./routes/rooms.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

/********** Connect database MongoDB ***********************/
mongoose.set("strictQuery", false);
const mongoConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO);
    console.log(`MONGO connected: ${connection.connection.host}`);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MONGO has been disconnected");
});
/***************** Middleware ************************************/
app.use(express.json());
app.use(cookieParser());

/***************** Routers ************************************/
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/hotels", hotelRoutes);

/***************** Middleware ************************************/

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";

  return res.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

/*****************************************************/
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  mongoConnect();
  console.log(`Server is on port ${PORT}`);
});
