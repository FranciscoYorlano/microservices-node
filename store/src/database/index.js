const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
    CharacterModel: conn.model(
        "collection_character",
        require("./schemas/character.schema")
    ),
    FilmModel: conn.model("collection_film", require("./schemas/film.schema")),
    PlanetModel: conn.model(
        "collection_planet",
        require("./schemas/planet.schema")
    ),
};
