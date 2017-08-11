var router = require('express').Router();

const ProjectService = require('../app/services/project');

module.exports = router;

router.get('/', ProjectService.all);

router.post('/', ProjectService.create);

router.get('/:id', ProjectService.getProjectById);

router.put('/:id', ProjectService.update);

router.put('/:id/user', ProjectService.addUser);
