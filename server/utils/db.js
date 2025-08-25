const mysql = require("mysql2");
const DB_CONFIG = {
  host: "mysql-ychnightder.alwaysdata.net",
  user: "401996",
  password: "",
  database: "ychnightder_spacetourism",
  port: 3306,
};

function connectDB() {
  const connection = mysql.createConnection(DB_CONFIG);

  connection.connect((err) => {
    if (err) {
      console.error("Erreur de connexion MariaDB:", err.stack);
      process.exit(1);
    } else {
      console.log("📦 Base de données MariaDB connectée.");
    }
  });

  return connection;
}

module.exports = {
  connectDB,
};
