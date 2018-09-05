const express = require('express');
const router = express.Router();
const dataService = require('./data.service');

// routes
router.get('/all', getAll);
router.post('/create', create);

module.exports = router;

function getAll(req, res, next) {
    dataService.getAll()
        .then(data => res.json(data))
        .catch(err => next(err));
}

function create(req, res, next) {
    dataService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}