const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./createRouter.js');
const bodyParser = require('body-parser');

const dogs = [
  { name: "Fluffy", breed: "Pomeranian" },
  { name: "Kane", breed: "Rottweiler" },
  { name: "Bonzo", breed: "German Shepherd" },
  { name: "Lucky", breed: "Cockapoo" },
  { name: "Luna", breed: "Husky" }
];

app.use(cors());
app.use(bodyParser.json());

// app.use('/', (req, res) => {
//   res.send('Hello World!');
// });


const dogsRouter = createRouter(dogs);

app.use('/api/dogs/', dogsRouter);


app.listen(3000, function() {
  console.log(`App running on port ${ this.address().port}`);
});
