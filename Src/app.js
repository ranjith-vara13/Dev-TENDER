const express = require("express");
 const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/singup", async (req, res) => {
 const user = new User ({
    firstname : "virat",
    lastname : "konderu",
    emailId : "viratrishi123@gmail.com",
    password : "virat123", 
 });
  
 await user.save();
 res.send("user Added successfully")
});

connectDB()
.then(( ) => {
    console.log("Database connection established..."); 
    app.listen(7777, () => {
        console.log("server  is successfully listening on port 7777...");
    });  
})
.catch((err) => {
    console.error("Database cannot be connected");
});

 