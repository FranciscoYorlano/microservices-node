const planets = require("./planets.json");

module.exports = {
    getAll: async () => {
        return planets;
    },
};
