const jwt = require('jsonwebtoken');
const { SECRET_TOKEN } = require('../config/index.js');

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_TOKEN,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
}

module.exports = { createAccessToken, verifyToken };
