const { prisma } = require('../prismaClient');

exports.createUser = async (req, res) => {
  const {username, password} = req.body;

  // Verifica o username e password
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: password, 
      },
    });

  // Retorna o usuário criado
    res.status(201).json(user); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the user." });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "An error occurred while retrieving users."});
  }
};

exports.getUserById = async (req, res) => {
  const {id} = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {id: Number(id)},
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving the user." });
  }
};

exports.updateUser = async (req, res) => {
  const {id} = req.params;
  const {username, password} = req.body;

  try {
    const user = await prisma.user.update({
      where: {id: Number(id)},
      data: {
        username,
        password,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the user." });
  }
};

exports.deleteUser = async (req, res) => {
  const {id} = req.params;

  try {
    await prisma.user.delete({
      where: {id: Number(id)},
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the user." });
  }
};
