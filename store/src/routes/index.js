const { Router } = require("express");
const store = require("../store");
const response = require("../utils/response");
const errorMessages = require("../utils/errorMessages");

const router = Router();

router.get("/:model", async (req, res) => {
    const data = await store[req.params.model].list();
    response.success(res, 200, data);
});

router.get("/:model/:id", async (req, res) => {
    console.log(`${req.params.id}`);
    const data = await store[req.params.model].get(`${req.params.id}`);
    response.success(res, 200, data);
});

/**
 * Not found
 */
router.use("*", (req, res) => {
    response.error(res, errorMessages.NOT_FOUND);
});

module.exports = router;
