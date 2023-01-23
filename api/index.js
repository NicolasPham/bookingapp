import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

/*****Router imported *****/
import authRoutes from './routes/auth.js';
import hotelRoutes from './routes/hotels.js';
import roomRoutes from './routes/rooms.js';
import userRoutes from './routes/users.js';


const app = express();
dotenv.config();

/********** Connect database MongoDB ***********************/
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MONGO has been connected");
    } catch (error) {
        throw(error);
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MONGO has been disconnected");
})
/***************** Middleware ************************************/
app.use(express.json());



/***************** Routers ************************************/
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/rooms", roomRoutes)
app.use("/api/hotels", hotelRoutes)


/***************** Middleware ************************************/
app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong";

    return res.status(errorStatus).send({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
})


/*****************************************************/
app.get('/', (req,res) => {
    res.send("Home page")
})

app.listen(5000, () => {
    mongoConnect();
    console.log("Server is on port 5000");
})