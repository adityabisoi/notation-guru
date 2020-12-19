const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

//Import routes
const infixToPostfixRoutes = require('./routes/infixToPostfixRoutes')
const postfixToInfixRoutes = require('./routes/postfixToInfixRoutes')
const infixToPrefixRoutes = require('./routes/infixToPrefixRoutes')
const prefixToInfixRoutes = require('./routes/prefixToInfixRoutes')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/',infixToPostfixRoutes)
app.use('/api/',postfixToInfixRoutes)
app.use('/api/',infixToPrefixRoutes)
app.use('/api/',prefixToInfixRoutes)

app.listen('5000', () => {
    console.log('Server started on port 5000')
})