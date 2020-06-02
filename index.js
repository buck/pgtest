const dbConfig = require("./db-config.json"); // db connection details

const initOptions = {
  // global event notification;
  error(error, e) {
    if (e.cn) {
      // A connection-related error;
      //
      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.log("CN:", e.cn);
      console.log("EVENT:", error.message || error);
    }
  },
};

const pgp = require("pg-promise")(initOptions);

// Creating the database instance:
const db = pgp(dbConfig);

db.connect()
  .then((obj) => {
    // Can check the server version here (pg-promise v10.1.0+):
    const serverVersion = obj.client.serverVersion;

    console.log(serverVersion);

    obj.done(); // success, release the connection;
  })
  .catch((error) => {
    console.log("ERROR:", error.message || error);
  });
