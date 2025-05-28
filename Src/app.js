const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

// to upload data from postman json to javascript data

app.post("/singup", async (req, res) => {
const user = new User(req.body);

    try {
        await user.save();
        res.send("User Added successfully!");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
});

app.get("/user",async  (req, res)=>{
const userEmail = req.body.emailId;

try {
const user = await User.find({emailId : userEmail});
if(user.length===0){
    res.status(404).send("user not found")
} else{
res.send(user);
}

   }
 catch (err) {
    res.status(400).send("something went wrong");
 }

})

// app.get ("/feed", (req, res)=>{

// });

// to delete the data

app.delete("/user", async (req, res) =>{
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted successfully");
    }catch (err) {
        res.status(400).send("something went wrong");
    }
});
 
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        await User.findByIdAndUpdate({ _id:userId }, data);
        res.send("User updated successfully");

    } catch (err) {
        res.status(400).send(" Something went wrong");
    }
});

connectDB()
.then(( ) => {
    console.log("Database connection established..."); 
    app.listen(7777, () => {
        console.log("server  is successfully listening on port 8888...");
    });
}) 
.catch((err) => {
    console.error("Database cannot be connected");
})
