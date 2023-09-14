const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const router = require("./src/routes");
const response = require("./src/utils/response");
const errorMessages = require("./src/utils/errorMessages");

const application = express();

/**
 * Bootstrap function
 * @param server Server
 * @param mongoDBUrl url de mongoDB
 * @param port port to connect
 * @param https secure https
 */
const bootstrap = async (
    server,
    // mongoDBUrl,
    port,
    https = false
) => {
    try {
        // await mongoose.connect(mongoDBUrl);
        server.listen(port);
        console.log(
            `App listening on http${https ? "s" : ""}://localhost:${port}`
        );
    } catch (error) {
        console.log(error);
    }
};

/**
 * Setting options
 */
application.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

application.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use("/", express.static("./public"));
application.use(
    cors({
        origin: "*",
    })
);
application.use("/characters", router);
application.use("*", (req, res) => {
    response.error(res, errorMessages.NOT_FOUND);
});

/**
 * Env config
 */
dotenv.config();

/**
 * Getting env vars
 */
const PORT = process.env.PORT;

bootstrap(application, PORT);
