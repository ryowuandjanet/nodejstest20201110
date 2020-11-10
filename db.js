const Pool = require("pg").Pool;

const pool =new Pool({
  user: "ubuntu",
  password: "",
  host: "127.0.0.1",
  port: 5432,
  database: "nodekb"
})

module.exports = pool;