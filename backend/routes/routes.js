const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/", controller.listRecipe);
router.get("/recipes", controller.listRecipe);
router.post("/update", controller.updateRating)
router.get("/reset", controller.newList);

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;