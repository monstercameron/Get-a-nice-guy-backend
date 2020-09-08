const router = require("express").Router();
const user = require("../../models/user/index");

router
  .get("/", async (req, res) => {
    const users = await user.find();
    res.send(users);
  })
  .post("/", async (req, res) => {
    const newUser = new user({ name: "test" });
    let result = await newUser.save();
    res.send(result);
  });

module.exports = router;
