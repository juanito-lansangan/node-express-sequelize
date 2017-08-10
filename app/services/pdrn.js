PdrnRequest = require('../../models/').PdrnRequest;
var exports = module.exports = {};

exports.all = function(req, res) {
  let limit = 10;
  let page = req.params.page * limit;
  PdrnRequest.findAll({
    include: ['City'],
    offset: page,
    limit: limit,
  })
  .then(pdrn => res.status(200).send(pdrn))
  .catch(error => res.status(400).send(error));
};
