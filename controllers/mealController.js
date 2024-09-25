const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createMeal = async (req, res) => {
  const { userId, name, description, inDiet } = req.body;
  const meal = await prisma.meal.create({ data: { userId, name, description, inDiet } });
  res.status(201).json(meal);
};

exports.getMeals = async (req, res) => {
  const meals = await prisma.meal.findMany();
  res.json(meals);
};

exports.getMealById = async (req, res) => {
  const { id } = req.params;
  const meal = await prisma.meal.findUnique({ where: { id: parseInt(id) } });
  if (meal) {
    res.json(meal);
  } else {
    res.status(404).json({ message: 'Refeição não encontrada' });
  }
};

exports.updateMeal = async (req, res) => {
  const { id } = req.params;
  const { userId, name, description, inDiet } = req.body;
  const meal = await prisma.meal.update({
    where: { id: parseInt(id) },
    data: { userId, name, description, inDiet }
  });
  res.json(meal);
};

exports.deleteMeal = async (req, res) => {
  const { id } = req.params;
  await prisma.meal.delete({ where: { id: parseInt(id) } });
  res.status(204).send();
};
