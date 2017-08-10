var router = require('express').Router();

const User = require('../models/User');

module.exports = router;

router.get('/', function(req, res, next) {
  User.findAll()
    .then(res.send.bind(res))
    .catch(next)
});

router.post('/', function(req, res, next) {
  // var user = req.body;
  // users.push(user);
  // res.redirect('/users');
});

router.get('/:id', function(req, res, next) {
  // var id = req.params.id;
  // var query = req.query;
  // console.log(query);
  // res.send(users[id]);
});
