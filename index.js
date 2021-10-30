import express from "express";
import bodyParser from 'body-parser';
import useRouter from './Route/users.js'
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/',useRouter);
mongoose.connect(
    "mongodb+srv://admin:Ademilola@cluster0.9ymuh.mongodb.net/jupit_db?retryWrites=true&w=majority"
)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.listen(PORT,()=>{
    console.log(`Server is Running On PORT ${PORT}`);
});