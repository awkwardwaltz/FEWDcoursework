const recipeDAO = require("../models/recipesmodel");
const recipe = new recipeDAO({ filename: "./data/recipes.db", autoload: true });

exports.newList = function (req, res) {
    recipe.init();
    res.redirect("/");
  };
  exports.listRecipe = function (req, res) {
    recipe.getAllEntries()
      .then((list) => {
        res.json(list);
        console.log("list sent");
      })
      .catch((err) => {
        console.log("promise rejected", err);
      });
  };
  exports.updateRating = function (req, res) {
    console.log("req body to add to database : ", req.body);
    recipe.updateRating(req.body).catch((err) => {
      console.log("promise rejected", err);
    });
    res.redirect("/");
  };