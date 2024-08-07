const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const { createAccessToken } = require("../libs/jwt");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ username, password: hashedPassword });

    if (user) {
      const token = await createAccessToken({ id: user._id });
      res.status(201).json({ _id: user._id, username: user.username, token });
    } else {
      res.status(400).json({ message: "Data del usuario no válida." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await createAccessToken({ id: user._id });
      res.json({ _id: user._id, username: user.username, token });
    } else {
      res.status(401).json({ message: "Credenciales no son válidas." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
