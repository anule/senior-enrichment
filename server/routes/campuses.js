const campusRoute = require('express').Router();
const { Campus } = require('../../db/models');


// GET methods
campusRoute.get('/', (_, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

campusRoute.get('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campus.findOne({ where: { id: campusId } })
    .then(campus => res.json(campus))
    .catch(next);
});


// POST methods
campusRoute.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next);
});

//PUT methods
campusRoute.put('/', (req, res, next) => {

})

module.exports = campusRoute;
