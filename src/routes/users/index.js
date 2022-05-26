const MainUsersRouter = require("express").Router()

MainUsersRouter.route("/profile")
    .get(require("./profile.view"))

module.exports = MainUsersRouter