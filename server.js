const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const infixToPostfix = require('./infixToPostfix')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.post('/api', (req, res, next) => {
    var inputExpression = req.body.expression
    var result = infixToPostfix.infixToPostfix(inputExpression)
    res.status(200).json({
        'expression': result
    })
})

app.listen('5000', () => {
    console.log('Server started on port 5000')
})