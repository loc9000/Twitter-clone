const MainPostsRouter = require("express").Router()

MainPostsRouter.route("/")
    .get(require("./main.view"))

module.exports = MainPostsRouter