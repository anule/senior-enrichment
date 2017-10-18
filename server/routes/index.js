const router = require('express').Router();

const campuses = require('./campuses');
const students = require('./students');

module.exports = router
  .use(require('webpack-middleware'))
  .use('/students', students)
  .use('/campuses', campuses);
