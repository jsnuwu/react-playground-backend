const { Pool } = require("pg");

const pool = new Pool({
  user: "test",
  host: "localhost",        
  database: "LOA",
  password: "test",
  port: 5432,
});

module.exports = pool;
