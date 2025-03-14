const express = require("express");
const connectToMongoDB = require("./config/connectToMongo");
const { connectToRedis } = require("./config/connectToRedis");
const router = require("./api/api");

const app = express();

app.use("/", router);

app.listen(3001, async () => {
  console.log("Server is running");
  await connectToRedis();
  await connectToMongoDB();
});
