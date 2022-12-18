const express = require("express");
const router = express.Router();
const path = require("path")
const app = express();
const cors = require('cors');
const bodyParser  = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, 'frontend/build')))

//router.get("/", controller.listRecipe);
router.get("/recipes", controller.listRecipe);
router.post("/update", controller.updateRating)
router.get("/reset", controller.newList);



router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
})

//const router = require('./routes/routes');
//app.use('/', router);
       const portNumber = process.env.PORT || 5000;
app.listen(portNumber, () => {
  console.log(`Server started on port ${portNumber}. Ctrl^c to quit.`);
});
