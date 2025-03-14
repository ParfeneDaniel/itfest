const { createClient } = require("redis");

const client = createClient();

const connectToRedis = async () => {
  try {
    await client.connect();
    console.log("Connection to Redis was done!");
  } catch (error) {
    console.log("Connection to Redis was not possible!", error);
  }
};

module.exports = { client, connectToRedis };
