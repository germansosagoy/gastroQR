const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const Company = require("../models/company.model.js");
const { createAccessToken } = require("../libs/jwt");

exports.register = async (req, res) => {
  const { companyName, username, email, confirmEmail, password, address, phoneNumber} = req.body;

  try {
    if (email !== confirmEmail) {
      return res
        .status(400)
        .json({ message: "Los correos electrónicos no coinciden." });
    }

    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario o correo ya existen." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    if (savedUser) {
      // crea la empresa/restaurante y la relaciona al usuario
      const company = new Company({
        companyName,
        owner: savedUser._id,
        address,
        phoneNumber,
      });

      const savedCompany = await company.save();

      // actualizar el usuario con la referencia a la empresa
      savedUser.companyId = savedCompany._id;
      await savedUser.save();

      const token = createAccessToken({ id: savedUser._id });

      res.status(201).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        token,
        companyId: savedCompany._id, // retornar el ID de la empresa también si es necesario
      });
    } else {
      res.status(400).json({ message: "Los datos del usuario no son válidos." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });
    if (!user) {
      return res.status(401).json({ message: "Credenciales no son válidas." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales no son válidas." });
    }
    // crea el token
    const token = createAccessToken({ id: user._id });

    // obtiene los detalles de la empresa
    const company = await Company.findById(user.companyId);
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
      companyId: company ? company._id : null, // retornar el ID de la empresa si existe
      companyName: company ? company.companyName : null, // también el nombre de la empresa si es necesario
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.logout = async (req, res) => {
  try {
    // en este caso simplemente devolvemos una respuesta exitosa, ya que la invalidación del token se maneja en el cliente
    res.status(200).json({ message: "Sesión cerrada exitosamente." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
