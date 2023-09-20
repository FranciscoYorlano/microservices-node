const express = require("express");
const response = require("./src/utils/response");
const errorMessages = require("./src/utils/errorMessages");
const { PORT } = require("./src/config/envs");
const { setOptions } = require("./src/config/expressConfig");

const application = express();

setOptions(application);
application.use("*", (req, res) => {
    response.error(res, errorMessages.NOT_FOUND);
});

application.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
