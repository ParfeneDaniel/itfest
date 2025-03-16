const express = require("express");
const connectToMongoDB = require("./config/connectToMongo");
const { connectToRedis } = require("./config/connectToRedis");
const router = require("./api/api");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/", router);

app.listen(3001, async () => {
  console.log("Server is running");
  // await connectToRedis();
  await connectToMongoDB();
});
