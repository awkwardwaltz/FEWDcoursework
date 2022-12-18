const express = require("express");
const router = express.Router();
const path = require("path")
const app = express();
const cors = require('cors');
const bodyParser  = require('body-parser');
const controller = require('./controllers/controllers')
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, 'frontend/build')))

app.get("/", controller.listRecipe);
app.get("/recipes", controller.listRecipe);
app.post("/update", controller.updateRating)
app.get("/reset", controller.newList);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
})

       const portNumber = process.env.PORT || 5000;
app.listen(portNumber, () => {
  console.log(`Server started on port ${portNumber}. Ctrl^c to quit.`);
});
