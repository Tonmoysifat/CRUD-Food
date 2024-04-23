const express = require("express")
const router = require("./src/routes/api")
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp")
const cors = require("cors")
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const path = require("path");
require("dotenv").config();
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb"}));
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3000,
});
app.use(limiter);


// let URL = "mongodb://localhost:27017/CRUD-food"
let URL = process.env.DATABASE_URL
let OPTION = {user: "", pass: "", autoIndex: true};
mongoose.connect(URL, OPTION).then(() => {
    console.log("Database Connected")
}).catch((err) => {
    console.error("Database connection error:", err);
});

app.set("etag", false)
app.use("/api", router)
module.exports = app;