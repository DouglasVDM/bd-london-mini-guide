const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('the main route is working')
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
});