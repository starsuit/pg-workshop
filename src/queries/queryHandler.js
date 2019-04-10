const dbConnection = require("../database/db_connection");

const getData = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const newUser = (name, location, cb) => {
  console.log("newUser");
  dbConnection.query(
    "INSERT INTO users (name, location) VALUES ($1, $2)",
    [name, location],
    (err, res) => {
      if (err) return cb(err);
      console.log("res.rows: " + res.rows);
      cb(null, res.rows);
    }
  );
};

module.exports = { getData, newUser };
