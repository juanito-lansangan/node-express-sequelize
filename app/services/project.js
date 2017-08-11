const Project = require('../../models/Project');
const UserProject = require('../../models/UserProject');
const UserProjectAccomplish = require('../../models/UserProjectAccomplish');

var exports = module.exports = {};

exports.all = function(req, res) {
  Project.findAll({
    include:[{all:true}]
  })
  .then(projects => res.status(200).json(projects))
  .catch(error => res.status(400).json(error));
}

exports.create = function(req, res) {
  Project.create(req.body)
  .then(project => res.status(200).json(project))
  .catch(error => res.status(400).json(error));
}

exports.addUser = function(req, res) {
  Project.findById(req.params.id)
  .then(project => {
    if (!project) {
      res.sendStatus(404);
      return;
    }
    // use add[Relationship] for belongsToMany
    // and use plural with s
    project.addProjectUsers(req.body.user_id)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
  })
  .catch(error => res.status(400).json(error));
}

exports.addUserAccomplish = function(req, res) {
  UserProject.findOne({
    where: {
      project_id: req.params.project_id,
      user_id: req.params.id
    }
  })
  .then(project => {
    if (!project) {
      res.sendStatus(404);
      return;
    }
    // use create[Relationship] for hasMany
    // and use singular without s
    project.createAccomplishment(req.body)
    .then(accomplish => res.status(200).json(accomplish))
    .catch(error => res.status(400).json(error));
  })
  .catch(error => res.status(400).json(error));
}

exports.update = function(req, res) {
  Project.findById(req.params.id)
  .then(project => {
    if (!project) {
      res.sendStatus(404);
      return;
    }

    project.update(req.body)
    .then(project => res.status(200).json(project))
    .catch(error => res.status(400).json(error));
  })
  .catch(error => res.status(400).json(error));
}

exports.getProjectById = function(req, res) {
  Project.findById(req.params.id)
  .then(project => res.status(200).json(project))
  .catch(error => res.status(400).json(error));
}
