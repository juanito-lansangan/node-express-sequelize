var express = require('express');
var router = express.Router();
var userService = require('../app/services/user');

router.route('/')
  .get(userService.all())
  .post(function(req, res) {
    res.json({ body: req.body });
  });

router.route('/:id')
  .get(function(req, res) {
    res.json({
      id: req.params.id,
      message: 'Get User By ID'
    });
  })
  .put(function(req, res) {
    res.json({
      id: req.params.id,
      message: 'Update User'
    });
  })
  .delete(function(req, res) {
    res.json({
      id: req.params.id,
      message: 'Delete User'
    });
  });

module.exports = router;
