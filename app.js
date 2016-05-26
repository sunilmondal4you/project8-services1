/**
 * Created by abc on 26/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello World!");
});

app.listen(3000,function () {
    console.log("Server started");
});