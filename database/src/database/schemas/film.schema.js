const { Schema } = require("mongoose");

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
    { timestamps: true }
);
