const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sunofnight801_db_user:8DfC2zYqJ7c0NRvz@loacluster.mqbjga3.mongodb.net/LOACluster"
    );
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