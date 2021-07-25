const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Json files for Cities
const Stratford = require('./Stratford.json');
const Heathrow = require('./Heathrow.json');
const Harrow = require('./Harrow.json');

// Global Cities Variable
const cities = [
  { name: "Harrow", data: Harrow },
  { name: "Heathrow", data: Heathrow },
  { name: "Stratford", data: Stratford },
];

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
  const cityNames = cities.map(city => city.name);
  res.json(cityNames);
});
  
  
// Get All Pharmacies for the City
app.get('/:city/pharmacies', (req, res) => {
  const { city } = req.params;

  //  Check if City Exists
  const foundCity = cities.some(someCity => someCity.name.toLowerCase() === city.toLowerCase());

  //  Return the Pharmacies for the City
  if (foundCity) {
    cities.filter((cityInArray) => {
      if (cityInArray.name.toLowerCase() === city.toLowerCase())
        (res.json(cityInArray.data.pharmacies))
    })
  } else { res.status(400).send(`City: ${city} not found!`) }
});


// Get All Colleges for the City
app.get('/:city/colleges', (req, res) => {
  const { city } = req.params;

  //  Check if City Exists
  const foundCity = cities.some(someCity => someCity.name.toLowerCase() === city.toLowerCase());

  //  Return the Colleges for the City
  if (foundCity) {
    cities.filter((cityInArray) => {
      if (cityInArray.name.toLowerCase() === city.toLowerCase())
        (res.json(cityInArray.data.colleges))
    })
  } else { res.status(400).send(`City: ${city} not found!`) }
});


// Get All Doctors for the City
app.get('/:city/doctors', (req, res) => {
  const { city } = req.params;

  //  Check if City Exists
  const foundCity = cities.some(someCity => someCity.name.toLowerCase() === city.toLowerCase());

  //  Return the Doctors for the City
  if (foundCity) {
    cities.filter((cityInArray) => {
      if (cityInArray.name.toLowerCase() === city.toLowerCase())
        (res.json(cityInArray.data.doctors))
    })
  } else { res.status(400).send(`City: ${city} not found!`) }
});


// Get All Hospitals for the City
app.get('/:city/hospitals', (req, res) => {
  const { city } = req.params;

  //  Check if City Exists
  const foundCity = cities.some(someCity => someCity.name.toLowerCase() === city.toLowerCase());

  //  Return the Hospitals for the City
  if (foundCity) {
    cities.filter((cityInArray) => {
      if (cityInArray.name.toLowerCase() === city.toLowerCase())
        (res.json(cityInArray.data.hospitals))
    })
  } else { res.status(400).send(`City: ${city} not found!`) }
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});