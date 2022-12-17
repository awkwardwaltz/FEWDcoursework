const nedb = require("nedb");
const { updateRating } = require("../controllers/controllers");


class Recipe {


  constructor(recipeFilePath) {
    console.log(recipeFilePath);
    if (recipeFilePath) {
      this.recipe = new nedb(recipeFilePath);
      console.log("recipe connected to " + recipeFilePath);
      recipeFilePath;
    } else {
      this.recipe = new nedb();
    }
  }
  init() {
    this.recipe.insert(
      {
        id: "1",
        name: "chocolate cake",
        rating: "5",
        ratings: "1",
        date: "01-04-2022",
        ingredients: [{ ingredient: "flour", quantity: "200g" }, { ingredient: "oil", quantity: "15ml" }, { ingredient: "eggs", quantity: "2" }, { ingredient: "chocolate", quantity: "100g" }, { ingredient: "sugar", quantity: "50g" }],
        method: "In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter, 4 large eggs, 200g self-raising flour, 2 tbsp cocoa powder, 1 tsp baking powder, ½ tsp vanilla extract, 2 tbsp milk and a pinch of salt until pale. For the buttercream, put 100g chopped milk chocolate in a heatproof bowl and melt in the microwave, stirring every 30 secs. Leave the melted chocolate to cool for 5 mins. On a cake stand or large plate, sandwich the cakes together with half of the buttercream, then spread the rest on top. Decorate with chocolate shards, if you like."
      }
    );
    this.recipe.insert(
      {
        id: "2",
        name: "tatty scones",
        rating: "4.2",
        ratings: "1",
        date: "02-04-2022",
        ingredients: [{ ingredient: "flour", quantity: "100g" }, { ingredient: "potato", quantity: "75g" }, { ingredient: "oil", quantity: "15ml" }],
        method: "Peel and boil potatoes, or boil with skins on and remove after. Use similar sized potatoes or cut to the smallest size. Turn the dough out onto a floured surface and separate into 3 balls. If the potatoes are still hot or very warm then allow to cool slightly before moving on to the next step. Use a spatula/fish slice to move the scone/s into the pan and fry on each side for 3-4 minutes. Keep an eye on the colour and if it's browning too quickly then turn the heat down. You can flip more than once."
      }
    );
    this.recipe.insert(
      {
        id: "3",
        name: "vegetable tagine",
        rating: "3.7",
        ratings: "1",
        date: "03-04-2022",
        ingredients: [{ ingredient: "harissa", quantity: "10ml" }, { ingredient: "cous cous", quantity: "150g" }, { ingredient: "onion", quantity: "150g" }, { ingredient: "tomato", quantity: "75g" }, { ingredient: "red pepper", quantity: "60g" }],
        method: "In a large heavy pot or Dutch Oven, heat olive oil over medium heat until just shimmering. Add onions and increase heat to medium-high. Saute for 5 minutes, tossing regularly. Keep the heat on medium-high, and cook for 10 minutes. Then reduce heat, cover and simmer for another 20 to 25 minutes or until veggies are tender. Transfer to serving bowls and top each with a generous drizzle of Private Reserve extra virgin olive oil. Serve hot with your favorite bread, couscous, or rice. Enjoy!"
      }
    );
    this.recipe.insert(
      {
        id: "4",
        name: "coq au vin",
        rating: "5",
        ratings: "1",
        date: "01-04-2022",
        ingredients: [{ ingredient: "chicken", quantity: "100g" }, { ingredient: "red wine", quantity: "200ml" }, { ingredient: "onion", quantity: "150g" }, { ingredient: "vegetable stock", quantity: "600ml" }, { ingredient: "carrot", quantity: "125g" }],
        method: "Add 12 peeled shallots to the pan and fry, stirring or shaking the pan often, for 5-8 mins until well browned all over. Remove and set aside with the bacon. Scatter in 3 finely chopped garlic cloves and fry briefly, then, with the heat medium-high, pour in 3 tbsp brandy or Cognac, stirring the bottom of the pan to deglaze. The alcohol should sizzle and start to evaporate so there is not much left. Bring the wine mixture to a gentle boil, then gradually drop in small pieces of the thickener, whisking each piece in using a wire whisk. Simmer for 1-2 mins."
      }
    );
    this.recipe.insert(
      {
        id: "5",
        name: "Falafel Wrap",
        rating: "5",
        ratings: "1",
        date: "05-05-2022",
        ingredients: [{ ingredient: "chickpeas", quantity: "100g" }, { ingredient: "tahini", quantity: "100ml" }, { ingredient: "pitta", quantity: "4" }, { ingredient: "houmous", quantity: "100ml" }, { ingredient: "pickles", quantity: "50g" }],
        method: "For the tahini sauce, mix together all the ingredients with some seasoning in a small bowl. Warm the flatbread in a dry frying pan – around 30 seconds on each side. Spoon the tahini sauce onto the flatbread and top with the falafel and avocado, then scatter with the herbs, squeeze over the lime juice and add the chilli sauce. Roll up and enjoy."
      }
    );
    this.recipe.insert(
      {
        id: "6",
        name: "Eton Mess",
        rating: "5",
        ratings: "1",
        date: "06-05-2022",
        ingredients: [{ ingredient: "egg whites", quantity: "100ml" }, { ingredient: "sugar", quantity: "100g" }, { ingredient: "double cream", quantity: "150ml" }, { ingredient: "berry compote", quantity: "100ml" }],
        method: "Heat oven to 120C/100C fan/gas 1 and line a large baking tray with parchment paper. Whisk the egg whites in a clean bowl using an electric whisk or tabletop mixer until they reach stiff peaks, then add the sugar in 3 lots, re-whisking to stiff peaks every time. Spoon dollops of the mixture onto the baking parchment, cook on the bottom shelf of the oven for 1hr – 1hr15 mins until the meringues are completely hard and come off the paper easily. Leave to cool. Blitz 1/3 of the strawberries to make a strawberry sauce. In a large bowl whisk the cream with the icing sugar until it just holds its shape. Roughly crush ¾ of the meringues and tip them in with the chopped strawberries and stir, then swirl through the strawberry sauce. Dollop into bowls then crush the remaining meringues, sprinkling the pieces over the top."
      }
    )
    this.recipe.insert(
      {
        id: "7",
        name: "Salt & Pepper Tofu",
        rating: "5",
        ratings: "1",
        date: "07-05-2022",
        ingredients: [{ ingredient: "tofu", quantity: "200g" }, { ingredient: "peppers", quantity: "50g" }, { ingredient: "soy sauce", quantity: "15ml" }, { ingredient: "MSG", quantity: "10g" }, { ingredient: "garlic", quantity: "5 cloves" }],
        method: "Slice the tofu into ½ inch (1 cm) thick, 1 ½ inch x 2 inch (4x5 cm) rectangles. Make the brine by stirring together the garlic powder, onion powder, salt, sugar, and warm water. Place the tofu into the brine for 1-2 hours. After 1 to 2 hours, drain the liquid from the tofu completely, and let it sit for 5 minutes to drain. Again, remove any standing liquid, gently toss the tofu pieces in the sesame oil and Shaoxing wine.Heat the oil in the wok over medium-high heat. Place the tofu in the wok in a single layer, and brown the tofu, adjusting the heat as needed. Don’t walk away, as you don’t want to burn the crust! After the tofu starts to brown, flip the tofu to brown the other side. When done, transfer the tofu to a plate. Sprinkle the rest of the salt and pepper spice evenly over the tofu and aromatics. It will absorb into the freshly fried tofu for that extra kick. Toss for another 15 seconds, transfer everything to a plate, and serve!"
      }
    )
    this.recipe.insert(
      {
        id: "8",
        name: "Roasted Squash Paella",
        rating: "5",
        ratings: "1",
        date: "12-05-2022",
        ingredients: [{ ingredient: "paella rice", quantity: "1 cup" }, { ingredient: "vegetable stock", quantity: "400ml" }, { ingredient: "squash", quantity: "200g" }, { ingredient: "saffron", quantity: "a pinch" }],
        method: "Combine the squash, 2 tablespoons of olive oil and 1/2 teaspoon salt on a parchment-lined baking sheet. Toss to combine and arrange in an even layer. Bake in the oven until browned and caramelized, about 30 to 40 minutes. Set aside. Pour enough of the stock over the rice so it is just slightly submerged. Bring to a boil, then turn the heat down to medium-low and simmer until most of the liquid is absorbed, about 25 to 30 minutes. Taste the rice; it should be crusty around the edges and al dente on top, but cooked through in the middle. If not, add another cup of stock and continue to cook for another 5 to 10 minutes.When paella is done, arrange the roasted butternut squash on top and garnish with parsley or scallions."
      }
    )
    this.recipe.insert(
      {
        id: "9",
        name: "Tomato Soup",
        rating: "5",
        ratings: "1",
        date: "13-05-2022",
        ingredients: [{ ingredient: "tomatoes", quantity: "300g" }, { ingredient: "tomato puree", quantity: "50g" }, { ingredient: "onion", quantity: "one large" }, { ingredient: "vegetable stock", quantity: "500ml" }],
        method: "Add onion wedges, water, can of tomatoes with their juices, and 1/2 teaspoon of salt. Bring to a simmer. Cook, uncovered, for about 40 minutes. Stir occasionally and add additional salt as needed. Blend the soup, and then season to taste. The soup doesn’t need to be ultra-smooth, some texture is a nice touch. An immersion blender does make quick work of this, or you can use a blender. If you use a regular blender, it is best to blend in batches and not fill the blender as much as you usually would since the soup is so hot. We like to remove the center insert of the lid and cover it with a kitchen towel while blending — this helps to release some of the steam and prevents the blender lid from popping off (which can be a big, hot mess)."
      }
    )
    this.recipe.insert(
      {
        id: "10",
        name: "Bejewelled Rice",
        rating: "5",
        ratings: "1",
        date: "14-05-2022",
        ingredients: [{ ingredient: "rice", quantity: "1 cup" }, { ingredient: "dried fruits", quantity: "50g" }, { ingredient: "almonds", quantity: "50g" }, { ingredient: "ground saffron", quantity: "a pinch" }],
        method: "Meanwhile, heat 1 Tbsp. oil in a large heavy pot over medium. Cook carrots, stirring occasionally, until softened but haven't taken on any color, 8–10 minutes. Stir in sugar and a pinch of salt and cook until sugar dissolves, about 1 minute more. Transfer carrot mixture to a medium bowl. Heat remaining 3 Tbsp. oil in same pot over medium. Cook scallion whites and garlic, stirring occasionally, until softened, 4–6 minutes. Stir in rice, red pepper flakes, cardamom, cinnamon, and turmeric; cook, stirring often, until some grains are translucent, about 3 minutes. Add 3¾ cups water, season with 1 Tbsp. salt, and bring to a boil. Reduce heat to medium-low, cover, and simmer until rice is tender, 15–18 minutes. Remove from heat, add butter and orange zest, and fluff rice with a fork. Cover pot and let rice steam 10 minutes."
      }
    )
    this.recipe.insert(
      {
        id: "11",
        name: "Mulled Wine",
        rating: "5",
        ratings: "1",
        date: "14-05-2022",
        ingredients: [{ ingredient: "red wine", quantity: "2 litres" }, { ingredient: "brown sugar", quantity: "50g" }, { ingredient: "spices", quantity: "15g" }],
        method: "Mix togetherall the ingredients (except the brandy, if using) in a large pan and warm over a low heat for 10-15 minutes or until fragrant and steaming but not boiling. Stir in the rum or brandy for the final minute, if using. Ladle into mugs or heatproof glasses, discarding any aromatics."
      }
    )
    this.recipe.insert(
      {
        id: "12",
        name: "Fudge Doughnut",
        rating: "5",
        ratings: "1",
        date: "14-05-2022",
        ingredients: [{ ingredient: "flour", quantity: "300g" }, { ingredient: "sugar", quantity: "50g" }, { ingredient: "fudge", quantity: "35g" }, { ingredient: "custard", quantity: "50g" }],
        method: "Gently place the doughnuts one at a time into the hot oil, in batches of 3-4 only (don't overcrowd the pan). Deep fry for 1-2 minutes, then flip over and fry the other side for 1-2 minutes. Remove them from the oil using a slotted scoop allowing the oil to drip off and transfer them to the paper towel until slightly cooled, then transfer to a cooling rack. Add the butter, sugar and milk to a small saucepan, stirring over medium heat. Once the butter has melted and the sugar dissolved, bring to the boil for 20 seconds. Remove the pan from the heat and cool for 10 minutes. Add the icing sugar and whisk in until fully incorporated. Place your doughnuts on a cooling rack, set over the top of a baking tray to catch any drips. Pour the icing over the top of the doughnuts while it is still a bit warm."
      }
    )
    this.recipe.insert(
      {
        id: "13",
        name: "Smoked Tempeh Banh Mi",
        rating: "5",
        ratings: "1",
        date: "14-05-2022",
        ingredients: [{ ingredient: "baguette", quantity: "1" }, { ingredient: "tempeh", quantity: "200g" }, { ingredient: "pickled cucumber", quantity: "35g" }, { ingredient: "chilli oil", quantity: "15ml" }, { ingredient: "coriander", quantity: "optional" }],
        method: "Start by pickling the vegetables. In a bowl or mason jar, combine 3/4 cup rice vinegar with 1/2 cup water. Toss in the carrots and onions, making sure they’re fully submerged. Cover and set aside at room temp for 30 to 60 minutes. Meanwhile, marinade the tempeh. In a medium shallow dish, combine 2 tablespoons soy sauce, 2 tablespoons maple syrup, 1 tablespoon rice vinegar, 1 tablespoon sesame oil, and 1 teaspoon garlic powder with 2 tablespoons water. Stir to combine. Add the tempeh and toss to coat. Set aside at room temp for 15 minutes, tossing again halfway through to make sure it’s marinating evenly. To assemble, spread 1 tablespoon of mayo on each quarter of the baguette. Top with 4-5 tempeh strips, pickled vegetables, cucumbers, and cilantro."
      }
    )
    this.recipe.insert(
      {
        id: "14",
        name: "Fried Okra",
        rating: "5",
        ratings: "1",
        date: "17-05-2022",
        ingredients: [{ ingredient: "okra", quantity: "200g" }, { ingredient: "gram flour", quantity: "100g" }, { ingredient: "butter", quantity: "35g" }],
        method: "Pat okra dry with paper towels. Place buttermilk in a shallow bowl. In another shallow bowl, combine the flour, cornmeal, salt, seasoning blend and pepper. Dip okra in buttermilk, then roll in cornmeal mixture. In an electric skillet or deep-fat fryer, heat 1 in. of oil to 375°. Fry okra, a few pieces at a time, for 1-1/2 to 2-1/2 minutes on each side or until golden brown. Drain on paper towels. Season with additional salt and pepper if desired."
      }
    )
    this.recipe.insert(
      {
        id: "15",
        name: "Baked Alaska",
        rating: "5",
        ratings: "1",
        date: "18-05-2022",
        ingredients: [{ ingredient: "flour", quantity: "200g" }, { ingredient: "sugar", quantity: "100g" }, { ingredient: "ice cream", quantity: "500ml" }, { ingredient: "eggs", quantity: "3" }],
        method: "Preheat the oven to 190°C/fan 170°C/gas 5. Grease and base line a 20cm round cake tin. Using a mixer or electric hand whisk, cream the butter and sugar until light and fluffy. Add the eggs, 1 at a time, whisking after each is added. Sift in the flour and cocoa and mix gently, adding enough milk to make a soft dropping consistency. Spoon evenly into the tin and bake for 20 minutes or until a skewer inserted into the centre comes out clean. Cool completely. Using a spatula, cover with the meringue, ensuring that the filling and cake are completely covered with no gaps. Smooth the meringue into swirled peaks and bake for 3-4 minutes, until lightly golden. Serve immediately."
      }
    )
    console.log(this.recipe)
  }

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.recipe.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
        }
      });
    });
  }

  findRatingEntry(input) {
    return new Promise((resolve, reject) => {

      this.recipe.findOne({ id: `${input[1]}` }, function (err, entry) {
        if (err) {
          reject(err);

        } else {
          resolve(entry);
          const { id, name, date, ingredients, method, _id } = entry


          //console.log("function findRatingEntry() returns: ", entry);
        }
      });

    });
  }

  updateRating(input) {
    return new Promise((resolve, reject) => {
      this.recipe.update({ _id: `${input[1]}` }, { $set: { rating: `${input[0]}`, ratings: `${input[2]}` } }, {}, function (err, entry) {
        if (err) {
          reject(err);
        } else {
          resolve(entry);
          console.log("success")
        }
      });
    })
  }

}
module.exports = Recipe;
