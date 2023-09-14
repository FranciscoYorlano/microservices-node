const { Router } = require("express");
const controller = require("../controller");
const router = Router();

router.get("/", controller.getAllPlanets);

/**
 * Not found
 */
router.use("*", (req, res) => {
    res.status(404).json({ error: "not found" });
});

module.exports = router;
