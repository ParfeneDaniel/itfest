const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connection to MongoDB is done!");
    } catch (error) {
        console.log("Connection to MongoDB was not possible!", error);
    }
}

module.exports = connectToMongoDB;