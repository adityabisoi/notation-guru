const express = require('express')
const app=express()

app.get('/api',(req,res,next)=>{
    const userData={
        fname:'Harry',
        lname:'Potter'
    }
    res.status(200).json(userData)
})

app.listen('5000',()=>{
    console.log('Server started on port 5000')
})