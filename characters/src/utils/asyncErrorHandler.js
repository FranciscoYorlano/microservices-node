const response = require("./response");
const errorMessages = require("./errorMessages");
const bugTracker = require("./bugTracker");

module.exports = (callBackFn) => {
    return (req, res, next) => {
        callBackFn(req, res).catch((err) => {
            bugTracker(errorMessages.UNKNOWN_EXCEPTION, err);
            response.error(res, errorMessages.UNKNOWN_EXCEPTION);
        });
    };
};
