const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("error connecting to database");
});
connection.on("connected", () => {
  console.log("mongoDB connection successful");
});
module.exports = mongoose;
