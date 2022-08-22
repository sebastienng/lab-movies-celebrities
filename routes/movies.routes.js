const router = require("express").Router();

const Movie = require("../models/Movie.model");

router.post("/", async (req, res) => {
  const newMovie = req.body;
  try {
    const movieCreated = await Movie.create({
      title: newMovie.title,
      genre: newMovie.genre,
      plot: newMovie.plot,
      cast: newMovie.cast,
    });

    res.status(201).json({ movie: movieCreated });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const getMovies = await Movie.find();
    res.status(201).json(getMovies);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getMovie = Movie.findByIdAnd(id)
      .populate("cast")
      .then((getMovie) => res.json(getMovie));

    // res.status(201).json(getMovie);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getMovie = await Movie.findByIdAndDelete(id);
    res.status(204).json(getMovie);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { title, genre, plot, cast } = req.body;
    const { id } = req.params;
    const updateMovie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, plot, cast },
      { new: true }
    );
    res.status(200).json(updateMovie);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
