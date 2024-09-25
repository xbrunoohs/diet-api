const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({ data: { username, password } });
  res.status(201).json(user);
};
