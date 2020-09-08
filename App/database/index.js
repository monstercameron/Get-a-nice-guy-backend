const mongoose = require("mongoose");
mongoose.connect(`${process.env.DATABASE}${process.env.DATABASENAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
