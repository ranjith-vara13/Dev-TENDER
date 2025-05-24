const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://Ranjithvara:Eight%401998-13@namastheranjith.e6ckxye.mongodb.net/DevTender"
    );
};

module.exports = connectDB;