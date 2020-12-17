const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")


const infixToPostfixRoutes = require('./routes/infixToPostfixRoutes')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/',infixToPostfixRoutes)

app.listen('5000', () => {
    console.log('Server started on port 5000')
})