const { charactersData } = require("../../resourses/characters.json");
const { filmsData } = require("../../resourses/films.json");
const { planetsData } = require("../../resourses/characters.json");
const { CharacterModel, FilmModel, PlanetModel } = require("../database");
const response = require("./response");
const errorMessages = require("./errorMessages");

const populate = async (req, res) => {
    /**
     * Return Not Found if some collection already has data
     */
    const characterCount = await CharacterModel.countDocuments();
    const filmCount = await FilmModel.countDocuments();
    const planetCount = await PlanetModel.countDocuments();

    if (characterCount || filmCount || planetCount) {
        return response.error(res, errorMessages.NOT_FOUND);
    }

    /**
     * Characters insertion without films ObjectIds
     */
};
