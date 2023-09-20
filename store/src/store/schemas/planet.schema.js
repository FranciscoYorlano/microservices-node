const { Schema, Types } = require("mongoose");

const PlanetSchema = new Schema(
    {
        _id: String,
        name: String,
        rotation_period: String,
        orbital_period: String,
        diameter: String,
        climate: String,
        gravity: String,
        terrain: String,
        surface_water: String,
        residents: [{ type: String, ref: "collection_character" }],
        films: [{ type: String, ref: "collection_film" }],
    },
    { timestamps: false }
);

PlanetSchema.statics.getAll = async function (page = 1, limit = 200) {
    return await this.find()
        .populate("films", ["_id", "title"])
        .populate("homeworld", ["_id", "name"]);
};

PlanetSchema.statics.getById = async function (id) {
    return await CharacterSchema.findOne({ _id: id })
        .populate("films", ["_id", "title"])
        .populate("homeworld", ["_id", "name"]);
};

PlanetSchema.statics.insert = async function (planet) {
    return await this.create(planet);
};

module.exports = PlanetSchema;
