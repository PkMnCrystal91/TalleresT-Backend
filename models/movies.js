const pool = require("../db");

const createMovie = async (movie) => {
  const { name, budget, released_date, duration } = movie;
  const query =
    "INSERT INTO movie (name, budget, released_date, duration) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [name, budget, released_date, duration];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getMovies = async () => {
  const query = "SELECT * FROM movie";
  const { rows } = await pool.query(query);
  return rows;
};

const getMovieByName = async (date) => {
  const query = "SELECT * FROM movie WHERE released_date ILIKE $1";
  const values = [`%${date}%`];
  const { rows } = await pool.query(query, values);
  return rows;
};

/* Exports */
module.exports = {
  createMovie,
  getMovies,
  getMovieByName,
};
