const App = require("express")();

App.use(require("body-parser").json());
App.use(require("cookie-parser")());
App.use(require("cors")());

if (process.env.ENV !== "dev") {
  app.use(require("compression")());
}

App.use(require("./middleware/logging/index").trafficLogger);
App.use("/api", require("./controllers/index").router);
App.use("*", require("./middleware/filenotfound/index").fileNotFound);
App.use(require("./middleware/logging/index").errorLogger);
App.use(require("./middleware/permissions/index").errorHandler);

module.exports = App;
