const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

const router = require('./routes/routes');
app.use('/', router);

app.listen(3001, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});
