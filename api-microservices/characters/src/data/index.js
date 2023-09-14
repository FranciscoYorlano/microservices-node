const characters = require("./characters.json");

module.exports = {
    getAll: async () => {
        return characters;
    },
};
