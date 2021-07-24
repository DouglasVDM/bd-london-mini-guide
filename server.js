const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

const Stratford = require('./Stratford.json');
const Bradford = require('./Bradford.json');

// Route Descriptions
app.get('/', (req, res) => {
  res.json(
    {
      "/pharmacies": "returns pharmacies list for stratford",
      "/colleges": "returns colleges list for stratford",
      "/doctors": "returns doctors list for stratford",
      "/hospitals": "returns hospitals list for stratford"
    }
  )
});

// Route for Pharmacies
app.get('/:city/pharmacies', (req, res) => {
  const { city } = req.params;
  const cities = [{ name: "Stratford", data: Stratford }, { name: "Bradford", data: Bradford }];

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

app.get('/:city/colleges', (req, res) => {
  const { city } = req.params;
  const cities = [{ name: "Stratford", data: Stratford }, { name: "Bradford", data: Bradford }];

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

app.get('/:city/doctors', (req, res) => {
  const { city } = req.params;
  const cities = [{ name: "Stratford", data: Stratford }, { name: "Bradford", data: Bradford }];

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

app.get('/:city/hospitals', (req, res) => {
  const { city } = req.params;
  const cities = [{ name: "Stratford", data: Stratford }, { name: "Bradford", data: Bradford }];

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
  console.log(`Server started on port: ${PORT}`)
});