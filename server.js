const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./src/db")
const app = express()
const path = require("path")
const {graphqlHTTP} = require("express-graphql")
const cookieParser = require('cookie-parser')

const schema = require("./src/graphql/schema")
const authenticate = require("./src/middleware/authenticate")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/templates/views"));

dotenv.config()

connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(authenticate)

require("./src/routes")(app)

app.listen(process.env.PORT, (req, res) => {
    console.log(`Twitta app running on port ${process.env.PORT}`)
})