var router = require('express').Router();

const PdrnRequest = require('../models/PdrnRequest');
const City = require('../models/City');
const Province = require('../models/Province');

module.exports = router;

router.get('/pdrn/:page', function(req, res, next) {
  var limit = 10;
  var page = req.params.page * limit;

  PdrnRequest.findAll({
    offset: page,
    limit: limit,
    include: [
      {model: City, as: 'city'},
      {model: Province, as: 'province'}
    ]
  })
  .then(res.send.bind(res))
  .catch(next)
});
