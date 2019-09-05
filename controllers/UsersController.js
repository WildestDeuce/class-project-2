var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/");
});

router.post("/users/create", function (req, res) {
    db.user.create({
        email: req.params.email, handle: req.params.handle, password: req.params
    })
    .then(function(dbUser) {
        console.log(dbUser);
        res.redirect("/")
    })
})