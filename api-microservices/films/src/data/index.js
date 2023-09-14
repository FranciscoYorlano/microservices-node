const films = require("./films.json");

module.exports = {
    getAll: async () => {
        return films;
    },
};
