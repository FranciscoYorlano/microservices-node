const cors = require("cors");
const express = require("express");

module.exports = {
    setOptions: (application) => {
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

        application.use(express.json());
        application.use(express.urlencoded({ extended: false }));
        application.use(
            cors({
                origin: "*",
            })
        );
    },
};
