const router = require('express').Router();
const db = require('../../db');

router.get('/', (req, res, next) => {
  db.Student.findAll()
    .then(info => info.data)
    .then(students => res.json(students))
    .catch(next);
});


module.exports = router;
