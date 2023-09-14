const service = require("../data");
const response = require("../utils/response");

module.exports = async (req, res) => {
    const planets = await service.getAll();
    return response.success(res, 200, planets);
};
