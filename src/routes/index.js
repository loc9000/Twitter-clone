module.exports = (app) => {
    // app.use("/auth", require("./auth"))
    app.use("/", require("./posts"))
    app.use("/users", require("./users"))
}