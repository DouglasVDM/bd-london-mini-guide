const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
});