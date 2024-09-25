const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({ data: { username, password } });
  res.status(201).json(user);
};

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { username, password }
  });
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({ where: { id: parseInt(id) } });
  res.status(204).send();
};
