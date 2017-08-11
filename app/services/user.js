const User = require('../../models/User');
const UserInformation = require('../../models/UserInformation');

var exports = module.exports = {};

exports.all = function(req, res) {
  User.findAll({
    include: [{all: true}]
   })
  .then(users => res.status(200).json(users))
  .catch(error => res.status(400).json(error));
}

exports.create = function(req, res) {
  User.create(req.body)
  .then(user => {
    // note: foreign key must allowed null value
    // in order this to work
    user.createInformation(req.body)
    .then(information => res.status(200).json(information))
    .catch(error => res.status(400).json(error));
  })
  .catch(error => res.status(400).json(error));
}

exports.update = function(req, res) {
  User.findById(req.params.id)
  .then(user => {
    if (!user) {
      res.sendStatus(404);
      return;
    }

    user.getInformation()
    .then(information => {
        information.update(req.body)
        .then(userInfo => res.status(200).json(userInfo))
        .catch(error => res.status(400).json(error));
    })
    .catch(error => res.status(400).json(error));
  })
  .catch(error => res.status(400).json(error));
}

exports.getUserById = function(req, res) {
  User.findById(req.params.id, {
    include: [{all: true}]
  })
  .then(user => res.status(200).json(user))
  .catch(error => res.status(400).json(error));
}
