const { Schema, Types } = require("mongoose");

const PlanetSchema = new Schema(
    {
        _id: Types.ObjectId,
        name: String,
        rotation_period: String,
        orbital_period: String,
        diameter: String,
        climate: String,
        gravity: String,
        terrain: String,
        surface_water: String,
        residents: [
            { type: Schema.Types.ObjectId, ref: "collection_character" },
        ],
        films: [{ type: Schema.Types.ObjectId, ref: "collection_film" }],
    },
    { timestamps: true }
);

module.exports = PlanetSchema;
