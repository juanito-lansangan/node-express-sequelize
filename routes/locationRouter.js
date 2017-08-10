var router = require('express').Router();

const City = require('../models/City');
const Province = require('../models/Province');

module.exports = router;

router.get('/cities/:provinceId', function(req, res, next) {
  var provinceId = req.params.provinceId;

  City.findAll({
    where: {
      province_id: provinceId
    }
  })
  .then(res.send.bind(res))
  .catch(next)
});

router.get('/provinces', function(req, res, next) {
  var provinceId = req.params.provinceId;

  Province.findAll()
  .then(res.send.bind(res))
  .catch(next)
});
