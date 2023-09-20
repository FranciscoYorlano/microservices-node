const { Schema, Types } = require("mongoose");

const CharacterSchema = new Schema(
    {
        _id: String,
        name: String,
        height: String,
        mass: String,
        hair_color: String,
        skin_color: String,
        eye_color: String,
        birth_year: String,
        gender: String,
        homeworld: { type: String, ref: "collection_planet" },
        films: [{ type: String, ref: "collection_film" }],
    },
    { timestamps: false }
);

CharacterSchema.statics.getAll = async function (page = 1, limit = 200) {
    return await this.find()
        .populate("films", ["_id", "title"])
        .populate("homeworld", ["_id", "name"]);
};

CharacterSchema.statics.getById = async function (id) {
    return await CharacterSchema.findOne({ _id: id })
        .populate("films", ["_id", "title"])
        .populate("homeworld", ["_id", "name"]);
};

CharacterSchema.statics.insert = async function (character) {
    return await this.create(character);
};

module.exports = CharacterSchema;
