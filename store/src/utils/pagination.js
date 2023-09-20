module.exports = Array.prototype.paginate = function (page = 1, limit = 200) {
    return this.slice((page - 1) * limit, (page - 1) * limit + limit);
};
