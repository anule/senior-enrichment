const router = require('express').Router();

const campuses = require('./campuses');
const students = require('./students');

module.exports = router
  .use('/students', students)
  .use('/campuses', campuses);
