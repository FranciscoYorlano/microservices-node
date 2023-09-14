const planets = require("../planets.json");

const getAllPlanets = (req, res) => {
    res.status(200).json(planets);
};

module.exports = {
    getAllPlanets,
};
