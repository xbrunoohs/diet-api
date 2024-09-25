const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.use('/api', userRoutes);
app.use('/api', mealRoutes);

module.exports = app;
