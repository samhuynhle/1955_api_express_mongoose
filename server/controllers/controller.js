const People = require('../models/people.js');

module.exports = {
    showall: (req, res) => {
        People.find()
            .then(people => res.json(people))
            .catch(err => res.json(err));
    },
    createnew: (req, res) => {
        People.create({name: req.params.name})
            .then(newPeople => res.json(newPeople))
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        People.remove({name: req.params.name})
            .then(removedPeople => res.json(removedPeople))
            .catch(err => res.json(err));
    },
    displayone: (req, res) => {
        People.findOne({name: req.params.name})
            .then(displayed => res.json(displayed))
            .catch(err => res.json(err));
    }
}