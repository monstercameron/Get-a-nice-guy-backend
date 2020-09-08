const fileNotFound = (req, res) => {
  res.send("404");
};

module.exports = { fileNotFound };
