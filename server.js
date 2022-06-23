const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(`mongodb+srv://vignesh-palani:${process.env.MONGO_KEY}@cluster0.aifee.mongodb.net/ubernet`);

//require route
app.use("/",require("./routes/userroute"));

app.listen(3001, function(){
    console.log("Express is running in port 3001");
});