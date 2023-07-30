const Movies = require("../models/movies");
const querystring = require("querystring");

const createMovie = async (req, res) => {
  try {
    const movie = await Movies.createMovie(req.body);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la película" });
  }
};

const getMovies = async (req, res) => {
  try {
    const params = querystring.parse(req.url.split("?")[1]);
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 6;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const options = await Movies.getMovies();
    const paginatedMovies = options.slice(startIndex, endIndex);

    res.json({
      page,
      limit,
      totalItems: options.length,
      totalPages: Math.ceil(options.length / limit),
      data: paginatedMovies,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las opciones" });
  }
};

const getMovieByDate = async (req, res) => {
  const { date } = req.query;
  try {
    const movie = await Movies.getMovieByName(date);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la pelicula" });
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieByDate,
};
