const db = require("../config/db");

const getByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM admin_users WHERE email = ?", [email], (err, res) => {
      if (err) reject(err);
      else resolve(res[0]);
    });
  });
};

module.exports = { getByEmail };