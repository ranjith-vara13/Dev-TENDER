const express = require("express");

const app = express();

app.use("/", (req, res)=> {
    res.send("hello from the ranji");
})

app.use("/hello", (req, res)=> {
    res.send("hello hello hello");
})

app.use("/test", (req, res)=> {
    res.send("hello from  the server");
})

app.listen(8888, () => {
    console.log("server is successfully listening on port 8888...");
});