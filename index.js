const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(
  cors({
    origin: true,
  })
);

app.get('/hi', (req, res) => {
  res.send('hihi');
});

app.get('', (req, res) => {
  res.send('hi');
});

app.listen(3000, (req, res) => {
  console.log('server listening in port 3000');
});
