require("dotenv").config();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: "root",
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB Connected");
});
module.exports = db;

