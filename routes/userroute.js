const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");

router.route("/create").post((req,res)=>{
    const title = req.body.title
});

router.route("/user/:postID").get((req,res)=>{

    User.findOne({phone:req.params.postID}).then(foundNotes=>res.json(foundNotes));
});


module.exports = router;