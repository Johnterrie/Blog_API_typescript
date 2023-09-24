import dotenv from "dotenv";
import express from "express"
import connectDB from "./db/connect";
import { string } from "joi";

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


dotenv.config()


// let uri:string = process.env.MONGO_URL as string
let uri:string = process.env.MONGO_URL!

const start = async () => {
    try {
        // await connectDB(uri)
        app.listen(PORT, () => {
            console.log("App is listening on PORT" + PORT)
        })
    } catch (error) {
        console.log("Error connecting to Port" + error)
    }
}

start();

