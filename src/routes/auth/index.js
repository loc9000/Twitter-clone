const MainAuthRouter = require("express").Router();

MainAuthRouter.route("/login")
    .get(require("./login.view"));
MainAuthRouter.route("/register")
    .get(require("./register.view"));

module.exports = MainAuthRouter;
