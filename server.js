const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Json files for Cities
const Stratford = require('./Stratford.json');
const Heathrow = require('./Heathrow.json');
const Harrow = require('./Harrow.json');

// Global Cities Variable
const cities = {
  harrow: Harrow,
  heathrow: Heathrow,
  stratford: Stratford
};

// Route Descriptions
app.get('/', (req, res) => {
  res.json(
    {
      "Route": "Value of route",
      "/cities": "returns all cities as an array",
      "/:city/pharmacies": "returns pharmacies list for city",
      "/:city/colleges": "returns colleges list for city",
      "/:city/doctors": "returns doctors list for city",
      "/:city/hospitals": "returns hospitals list for city",
    }
  )
});

// List of All the Cities in an Array
app.get('/cities', (req, res) => {
  const cityNames = Object.keys(cities)
  res.json(cityNames);
});
  
// Get All Pharmacies for the City
app.get('/:city/:category', (req, res) => {
  const city = req.params.city.toLowerCase();
  const category = req.params.category.toLowerCase();
  
  // Selected City Validation
  if (!cities[city]) {
    res.status(400).send(`City: ${city} not found!`)
  } if (!cities[city][category]) {
    res.status(400).send(`Category: ${category} not found!`)
  } else {
    res.send(cities[city][category])
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});
