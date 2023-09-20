const { Schema, Types } = require("mongoose");

const CharacterSchema = new Schema(
    {
        _id: Types.ObjectId,
        name: String,
        height: String,
        mass: String,
        hair_color: String,
        skin_color: String,
        eye_color: String,
        birth_year: Date,
        gender: { type: String, enum: ["male", "women", "unknow"] },
        homeworld: { type: Schema.Types.ObjectId, ref: "collection_planet" },
        films: [{ type: Schema.Types.ObjectId, ref: "collection_film" }],
    },
    { timestamps: true }
);

CharacterSchema.statics.getAll = async function (page = 1, limit = 200) {
    const offset = (page - 1) * limit;
    const characters = await this.find()
        .populate("collection_film", ["_id", "title"])
        .populate("collection_planet", ["_id", "name"]);
    return characters.slice(offset, offset + limit);
};

CharacterSchema.statics.getById = async function (id) {
    return await CharacterSchema.findOne({ _id: id })
        .populate("collection_film", ["_id", "title"])
        .populate("collection_planet", ["_id", "name"]);
};

CharacterSchema.statics.insert = async function (character) {
    return await this.create(character);
};

module.exports = CharacterSchema;
