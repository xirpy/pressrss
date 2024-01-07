const express = require('express');
const app = express();
const { 
  betteranime, 
  animeto, 
  epic
} = require('./route.js');

app.get('/', async (req, res) => {
  res.sendStatus(200)
})

app.use('/betteranime', betteranime);
app.use('/epic', epic);
app.use('/9anime', animeto)


app.listen(4000);
