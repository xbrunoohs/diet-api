const express = require('express');
const {
  createMeal,
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal
} = require('../controllers/mealController');
const router = express.Router();

router.post('/meals', createMeal);
router.get('/meals', getMeals);
router.get('/meals/:id', getMealById);
router.put('/meals/:id', updateMeal);
router.delete('/meals/:id', deleteMeal);

module.exports = router;
