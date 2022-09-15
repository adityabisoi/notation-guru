const express = require('express')
const router = express.Router()
const infixToPostfix = require('../core/infixToPostfix')

router.post('/infixToPostfix', (req, res, next) => {
    try {
        var inputExpression = req.body.expression
        const {data,output} = infixToPostfix.infixToPostfix(inputExpression)
        res.status(200).json({
            data: data,
            output: output
        })
    } catch (error) {
        res.status(500).json({
            message: 'Please enter the string correctly',
        })
    }
})

module.exports = router
