const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const path = require('path');

const port=process.env.PORT || 5000

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

if (process.env.NODE_ENV=='production') {
    app.use(express.static('build'))
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname,'/ui/build','index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})