const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log('>>>>>>> MongoDB conectado exitosamente!');
  } catch (err) {
    console.error(
      "---------- Error al conectar MongoDB --------- ",
      err.message
    );
    process.exit(1);
  }
};

module.exports = connectDB;
