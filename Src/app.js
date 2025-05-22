const express = require("express");

const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth");

app.get("/admin", adminAuth, (req, res) => {
    res.send("Admin Area");
});

app.get("/user", userAuth, (req, res) => {
    res.send("Admin Area");
});

    app.listen(7777, () => {
        console.log("server  is running on port 7777");
    });