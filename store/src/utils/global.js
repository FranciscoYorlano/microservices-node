const fs = require("fs");
const path = require("path");

function loadJSON(fileName) {
    const filePath = path.join(__dirname, `../../resourses/${fileName}.json`);
    try {
        const jsonData = fs.readFileSync(filePath, "utf8");
        return JSON.parse(jsonData);
    } catch (error) {
        throw new Error(
            `Error al leer el archivo JSON ${fileName}: ${error.message}`
        );
    }
}

module.exports = {
    loadJSON,
};
