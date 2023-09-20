const express = require("express");
const response = require("./src/utils/response");
const errorMessages = require("./src/utils/errorMessages");
const { PORT } = require("./src/config/env.config");
const { setOptions, setMethods } = require("./src/config/app.config");

const application = express();

setMethods();
setOptions(application);
application.use("*", (req, res) => {
    response.error(res, errorMessages.NOT_FOUND);
});

application.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
