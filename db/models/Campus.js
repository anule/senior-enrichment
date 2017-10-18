const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    isNull: false,
    unique: true,
  },
  // images can have a defaultValue that holds a static image
  image: { type: Sequelize.STRING },
});
