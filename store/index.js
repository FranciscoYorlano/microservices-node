const express = require("express");
const { PORT } = require("./src/config/env.config");
const { setOptions, setMethods } = require("./src/config/app.config");
const router = require("./src/routes");

const application = express();

setMethods();
setOptions(application);

application.use(router);

application.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
