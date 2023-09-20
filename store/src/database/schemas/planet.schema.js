const { Schema } = require("mongoose");

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
        res_idents: [{ type: String, ref: "collection_character" }],
        films: [{ type: String, ref: "collection_film" }],
    },
    { timestamps: true }
);

module.exports = PlanetSchema;
