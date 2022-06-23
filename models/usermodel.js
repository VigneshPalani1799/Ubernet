const mongoose = require("mongoose");

const userSchema = {
    name:String,
    phone:String,
    password:String,
    address:String,
    city:String,
    pincode:String,
}

const User = mongoose.model("user",userSchema);

module.exports = User;