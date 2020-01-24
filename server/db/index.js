'use strict';

const db = require('./database');
const User = require('./models/User');
const Meal = require('./models/Meal');

module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  Meal,
};
