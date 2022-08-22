const router = require("express").Router();
// const { default: mongoose } = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

router.post("/", async (req, res) => {
  const newCeleb = req.body;
  try {
    const celebCreated = await Celebrity.create({
      name: newCeleb.name,
      occupation: newCeleb.occupation,
      catchPhrase: newCeleb.catchPhrase,
    });

    res.status(201).json({ celeb: celebCreated });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const getCeleb = await Celebrity.find();
    res.status(201).json(getCeleb);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
