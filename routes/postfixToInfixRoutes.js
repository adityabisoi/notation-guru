const express = require('express')
const router = express.Router()
const postfixToInfix = require('../core/postfixToInfix')


router.post('/postfixToInfix', (req, res, next) => {
    try {
        var inputExpression = req.body.expression
        var result = postfixToInfix.postfixToInfix(inputExpression)
        res.status(200).json({
            'expression': result
        })
    } catch (error) {
        res.status(500).json({
            'message': error.message
        })
    }
   
})

module.exports = router