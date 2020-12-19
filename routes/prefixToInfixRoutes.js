const express = require('express')
const router = express.Router()
const prefixToInfix = require('../core/prefixToInfix')


router.post('/prefixToInfix', (req, res, next) => {
    try {
        var inputExpression = req.body.expression
        var result = prefixToInfix.prefixToInfix(inputExpression)
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