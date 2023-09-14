module.exports = {
    success: (res, status, body) => {
        return res.status(status).json(body);
    },
    error: (res, errorMessage) => {
        return res.status(errorMessage.status).json(errorMessage);
    },
};
