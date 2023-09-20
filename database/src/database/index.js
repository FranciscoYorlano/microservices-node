const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

const CharacterModel = conn.model(
    "collection_character",
    require("./schemas/character.schema")
);
const FilmModel = conn.model(
    "collection_film",
    require("./schemas/film.schema")
);

CharacterModel.find().then((res) => console.log(res));
