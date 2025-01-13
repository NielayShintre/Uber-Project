const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Successfully connected to DB"))
    .catch((err) => console.log(err, "Error connecting to DB"))
}

module.exports = connectToDb;