require("dotenv").config();
const App = require("./App/index");
const mongoose = require("./App/database/index");
const db = mongoose.connection;

db.on("error", () => console.log("connection error:"));
db.once("open", () => {
  App.listen(process.env.PORT, () =>
    console.log(`Server listening on Port:${process.env.PORT}`)
  );
});
