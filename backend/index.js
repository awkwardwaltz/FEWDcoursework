const express = require("express");
const path = require("path")
const app = express();
const cors = require('cors');
const bodyParser  = require('body-parser');
app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend/build')))


app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
})

const router = require('./routes/routes');
//app.use('/', router);
       const portNumber = process.env.PORT || 5000;
app.listen(portNumber, () => {
  console.log(`Server started on port ${portNumber}. Ctrl^c to quit.`);
});
