
require('dotenv').config()


const express = require('express');
const app = express()

//HOME ROUTE
app.get('/', (req, res)=>{
    res.send('hello world')
})

//404 ROUTE
app.get('*',(req, res)=> {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)