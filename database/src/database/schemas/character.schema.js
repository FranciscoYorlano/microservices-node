const { Schema } = require("mongoose");

const CharacterSchema = new Schema(
    {
        _id: String,
        name: String,
        height: String,
        mass: String,
        hair_color: String,
        skin_color: String,
        eye_color: String,
        birth_year: Date,
        gender: { type: String, enum: ["male", "women", "unknow"] },
        homeworld: { type: String, ref: "collection_planet" },
        films: [{ type: String, ref: "collection_film" }],
    },
    { timestamps: true }
);

module.exports = CharacterSchema;
