module.exports = (app) => {
    app.use("/", require("./posts"))
    app.use("/users", require("./users"))
    app.use("/auth", require("./auth"))
}