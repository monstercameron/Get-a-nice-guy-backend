const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.send("error");
};

module.exports = { errorHandler };
