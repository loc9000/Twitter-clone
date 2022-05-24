const express = require("express")
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/templates/views'))

// Middleware ex: app.use, next
app.use((req, res, next) => {
    console.log('Request made at ' + Date.now())
    next()
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/login', (req, res) => {
    res.render('Login')
})

app.get('/register', (req, res) => {
    res.render('Register')
})

app.get('/user', (req, res) => {
    res.render('user')
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})