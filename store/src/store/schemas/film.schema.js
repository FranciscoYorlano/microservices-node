const { Schema, Types } = require("mongoose");

const FilmSchema = new Schema(
    {
        _id: String,
        title: String,
        opening_crawl: String,
        director: String,
        producer: String,
        release_date: Date,
        characters: [{ type: String, ref: "collection_character" }],
        planets: [{ type: String, ref: "collection_planet" }],
    },
    { timestamps: false }
);

FilmSchema.statics.list = async function () {
    return await this.find()
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"]);
};

FilmSchema.statics.get = async function (id) {
    return await this.findOne({ _id: id })
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"]);
};

FilmSchema.statics.insert = async function (film) {
    return await this.create(film);
};

module.exports = FilmSchema;
