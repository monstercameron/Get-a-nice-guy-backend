const mongoose = require("../../database/index");
const user = mongoose.model(
  "user",
  new mongoose.Schema({
    name: {
      type: String,
      unique: true,
    },
  })
);
module.exports = user;
