const MainUsersRouter = require("express").Router()

MainUsersRouter.route("/user")
    .get(require("./user.view"))

MainUsersRouter.route("/profile")
    .get(require("./profile.view"))

module.exports = MainUsersRouter