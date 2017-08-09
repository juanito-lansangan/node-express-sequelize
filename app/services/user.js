User = require('../../models/').User;
module.exports = {
  all(req, res) {
    return User.findAll()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
  }
}
