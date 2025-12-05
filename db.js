const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas connected!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;



/*const { Pool } = require("pg");

const pool = new Pool({
  user: "test",
  host: "localhost",        
  database: "LOA",
  password: "test",
  port: 5432,
});

module.exports = pool;

*/