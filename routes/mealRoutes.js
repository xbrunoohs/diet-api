const express = require('express');
const { createMeal } = require('../controllers/mealController');
const router = express.Router();

router.post('/meals', createMeal);

module.exports = router;
