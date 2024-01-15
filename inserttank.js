require("dotenv").config();

const connectDB = require("./db/connect");
const Tank = require("./models/tankm");

const TankJson = require("./tank.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Tank.create(TankJson);
    console.log("Data added successfully");
  } catch (error) {
    console.log("error");
  }
};

start();
