var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send([
    {username: "Person1", fullName: "Person One"},
    {username: "Person2", fullName: "Person Two"}
  ]);
});

module.exports = router;
