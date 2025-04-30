const express = require("express");
const router = express.Router();
const mongoClient = require("../services/MongoClientService");
const APIResponse = require("../DTOs/APIResponse");

router.use(function (req, res, next) {
  next();
});

router.get('/', function(req, res, next) {
    res.render('subscribe/index');
});

router.get('/email_exist', function(req, res, next) {
    res.render('subscribe/email_exist');
});

router.get('/email_not_exist', function(req, res, next) {
    res.render('subscribe/email_not_exist');
});

router.get('/unsubscribe', function(req, res, next) {
    res.render('subscribe/unsubscribe');
});

router.get('/success', function(req, res, next) {
    res.render('subscribe/success');
});

module.exports = router;