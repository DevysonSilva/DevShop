// config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'LmDTvYfirIEMveucbORPUpCEELvulOOa',
  database: 'railway',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('🟢 Conexão com o MySQL estabelecida.');
  }
});

module.exports = connection;