const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./src/db")
const app = express()
const path = require("path")
const {graphqlHTTP} = require("express-graphql")

const schema = require("./src/graphql/schema")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/templates/views"));

dotenv.config()

connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

require("./src/routes")(app)

app.listen(process.env.PORT, (req, res) => {
    console.log(`Twitta app running on port ${process.env.PORT}`)
})