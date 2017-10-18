const campusRoute = require('express').Router();
const { Campus } = require('../../db/models');


// GET methods
campusRoute.get('/', (_, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

campusRoute.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Campus.findOne({ where: { id } })
    .then(campus => res.json(campus))
    .catch(next);
});


// POST methods
campusRoute.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next);
});

// PUT methods
campusRoute.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, image } = req.body;

  Campus.findOne({ where: { id } })
    .then((campus) => {
      if (!name) {
        campus.update({ image });
      }
      if (!image) {
        campus.update({ name });
      }
      if (name && image) {
        campus.update({ name, image });
      }
    })
    .then(() => res.status(202).send('Change accepted'))
    .catch(next);
});

// DELETE method
campusRoute.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Campus.findOne({ where: { id } })
    .then(() => Campus.destroy({ where: { id } }))
    .then(() => res.status(308).send('Campus deleted').redirect('/'))
    .catch(next);
});

module.exports = campusRoute;
