const express = require('express')
const router = express.Router()
const prefixToPostfix = require('../core/prefixToPostfix')


router.post('/prefixToPostfix', (req, res, next) => {
    try {
        var inputExpression = req.body.expression
        var result = prefixToPostfix.prefixToPostfix(inputExpression)
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
