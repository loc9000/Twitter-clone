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

require("./src/routes")(app)

// GraphQL middleware for testing
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))
app.use((req, res, next) => {
    console.log('Request made at ' + Date.now())
    next()
})
// app.get('/', (req, res) => {
    //     res.render('index')
    // })
    
// app.get('/profile', (req, res) => {
//     res.render('profile')
// })

app.get('/login', (req, res) => {
    res.render('Login')
})

app.get('/register', (req, res) => {
    res.render('Register')
})

app.get('/user', (req, res) => {
    res.render('user')
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Twitta app running on port ${process.env.PORT}`)
})