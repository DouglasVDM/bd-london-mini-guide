const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

const Stratford = require('./Stratford.json');

// Route Descriptions
app.get('/', (req, res) => {
  res.json(
    {
      "/pharmacies": "returns pharmacies list for stratford",
      "/colleges": "returns colleges list for stratford",
      "/doctors":	"returns doctors list for stratford",
      "/hospitals":	"returns hospitals list for stratford"
    }
  )
});

// Route for Pharmacies
app.get('/pharmacies', (req, res) => {
  res.json(Stratford.pharmacies)
});

app.get('/colleges', (req, res) => {
  res.json(Stratford.colleges);
});

app.get('/doctors', (req, res) => {
  res.json(Stratford.doctors);
});

app.get('/hospitals', (req, res) => {
  res.send(Stratford.hospitals);
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
});