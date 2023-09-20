const { Schema, Types } = require("mongoose");

const FilmSchema = new Schema(
    {
        _id: Types.ObjectId,
        title: String,
        opening_crawl: String,
        director: String,
        producer: String,
        release_date: Date,
        characters: [
            { type: Schema.Types.ObjectId, ref: "collection_character" },
        ],
        planets: [{ type: Schema.Types.ObjectId, ref: "collection_planet" }],
    },
    { timestamps: true }
);

CharacterSchema.statics.list = async function () {
    return await this.find()
        .populate("collection_film", ["_id", "title"])
        .populate("collection_planet", ["_id", "name"]);
};

CharacterSchema.statics.get = async function (_id) {
    return await this.findOne({ _id })
        .populate("collection_film", ["_id", "title"])
        .populate("collection_planet", ["_id", "name"]);
};

module.exports = FilmSchema;
