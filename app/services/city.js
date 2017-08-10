City = require('../../models/').City;
var exports = module.exports = {};

exports.getByProvinceId = function(req, res) {
  let province_id = req.params.province_id || 0;
  City.findAll({
    where: {
      province_id: province_id
    }
  })
  .then(cities => res.status(200).send(cities))
  .catch(error => res.status(400).send(error));
};
