const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/env.config");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
    Character: conn.model(
        "collection_character",
        require("./schemas/character.schema")
    ),
    Film: conn.model("collection_film", require("./schemas/film.schema")),
    Planet: conn.model("collection_planet", require("./schemas/planet.schema")),
};
