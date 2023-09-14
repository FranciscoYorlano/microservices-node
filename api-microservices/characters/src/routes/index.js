const { Router } = require("express");

const router = Router();

/**
 * Not found
 */
router.use("*", (req, res) => {
    res.status(404);
});

module.exports = router;
