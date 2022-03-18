const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

const port=process.env.PORT || 5000

//Import routes
const infixToPostfixRoutes = require('./routes/infixToPostfixRoutes')
const postfixToInfixRoutes = require('./routes/postfixToInfixRoutes')
const infixToPrefixRoutes = require('./routes/infixToPrefixRoutes')
const prefixToInfixRoutes = require('./routes/prefixToInfixRoutes')
const prefixToPostfixRoutes = require('./routes/prefixToPostfixRoutes')
const postfixToPrefixRoutes = require('./routes/postfixToPrefixRoutes')

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
app.use('/api/',prefixToPostfixRoutes)
app.use('/api/',postfixToPrefixRoutes)

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('ui/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'ui', 'build', 'index.html'));
    });
  }

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})