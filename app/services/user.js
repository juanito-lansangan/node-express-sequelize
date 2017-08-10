User = require('../../models/').User;
var exports = module.exports = {};

exports.all = function(req, res) {
  User.findAll()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
}
