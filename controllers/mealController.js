const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createMeal = async (req, res) => {
  const { userId, name, description, inDiet } = req.body;
  const meal = await prisma.meal.create({ data: { userId, name, description, inDiet } });
  res.status(201).json(meal);
};
