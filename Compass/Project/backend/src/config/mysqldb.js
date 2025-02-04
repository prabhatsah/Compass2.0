
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'localhost',     // MySQL server hostname
  user: 'root', // MySQL username
  password: '3mUZ0O33la4;', // MySQL password
  database: 'compass_db', // database name
});

//module.exports = pool;
export default pool;
