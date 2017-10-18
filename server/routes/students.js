const studentRoute = require('express').Router();
const { Student } = require('../../db/models');


// GET methods
studentRoute.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

studentRoute.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Student.findOne({ where: { id } })
    .then(student => res.json(student))
    .catch(next);
});


// POST method
studentRoute.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.status(201).json(student))
    .catch(next);
});


// PUT method
studentRoute.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;

  Student.findOne({ where: { id } })
    .then((student) => {
      if (!name) {
        student.update({ email });
      }
      if (!email) {
        student.update({ name });
      }
      if (name && email) {
        student.update({ name, email });
      }
      return student;
    })
    .then(student => res.status(202).json(student))
    .catch(next);
});


// DELETE method
studentRoute.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Student.destroy({ where: { id } })
    .then(() => res.status(308).send('Student deleted'))
    .catch(next);
});

module.exports = studentRoute;
