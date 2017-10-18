const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
  name: { type: Sequelize.STRING, isNull: false },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    unique: true,
  },
});
