const router = require('express').Router();
const { Student } = require('../../db/models');

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(info => info.data)
    .then(students => res.json(students))
    .catch(next);
});


module.exports = router;
