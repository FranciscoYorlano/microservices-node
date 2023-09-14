module.exports = (res, status, body) => {
    return res.status(status).json(body);
};
