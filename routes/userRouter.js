var router = require('express').Router();
const UserService = require('../app/services/user');

module.exports = router;

router.get('/', UserService.all);

router.post('/', UserService.create);

router.get('/:id', UserService.getUserById);

router.put('/:id', UserService.update);
