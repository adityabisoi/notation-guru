const express = require('express')
const router = express.Router()
const postfixToPrefix = require('../core/postfixToPrefix')

router.post('/postfixToPrefix', (req, res, next) => {
    try {
        var inputExpression = req.body.expression
        var result = postfixToPrefix.postfixToPrefix(inputExpression)
        res.status(200).json({
            expression: result,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
})
module.exports = router
