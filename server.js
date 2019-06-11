const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/national", {useNewUrlParser: true});

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/"));

const routes = {
    "/": require(__dirname + "/app/routes/index"),
    "/contact": require(__dirname + "/app/routes/contact"),
    "/menu": require(__dirname + "/app/routes/menu"),
}

for (var key in routes) {
    app.use(key, routes[key]);
}


app.listen(8080);