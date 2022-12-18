const express = require("express");
const path = require("path")
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend/build')))

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
})

const router = require('./routes/routes');
app.use('/reset', router);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000. Ctrl^c to quit.");
});
