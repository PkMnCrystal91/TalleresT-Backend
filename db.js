const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", //Cambiar según su configuración
  host: "localhost",
  database: "pruebatecnica", //Cambiar según su configuración
  password: "root", //Cambiar según su configuración
  port: 5432,
});

/* pool.connect((err, client, done) => {
  if(err) throw err;
  console
}) */

module.exports = pool;
