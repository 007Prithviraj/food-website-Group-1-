const express = require('express')
const app = express() // initialise
const Foodorder = require('./foodorder.js')
const path = require('path')
require("./db")

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.post('/additem', async(req,res)=>{
    console.log(req.body)
    const orderbody = new Foodorder(req.body);
    await orderbody.save();
    res.redirect('/')
})

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})