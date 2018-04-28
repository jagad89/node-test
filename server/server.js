var express = require('express');
var app = new express();

app.get('/',(req, res)=>{
    // res.status(200).send('Hello World!');
    res.status(200).send({
        error:1001,
        message: "Something went wrong"
    });
});

app.get('/users',(req, res) => {
    res
    .status(200)
    .send([
        {
            name:"John",
            age:30
        },
        {
            name:"Jason",
            age:24     
        },
        {
            name:"Mak",
            age:28     
        }])
});

app.listen(3000);

module.exports.app = app;