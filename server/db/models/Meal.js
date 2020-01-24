const Sequelize = require('sequelize');
const db = require('../database');

const Meal = db.define('meal', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.depaul.edu/about/campuses/PublishingImages/FJG-DEPAUL1016-1020-1200x800.jpg',
  },
  category: {
    type: DataTypes.ENUM,
    values: ['protein', 'vegetable', 'fruit', 'carb'],
    allowNull: false,
    validate: {
      isIn: [['protein', 'vegetable', 'fruit', 'carb']],
    },
  },
  calories: {
    type: Sequelize.INTEGER,
    validate: {
      min: 10,
      max: 3000,
    },
  },
  quantity: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Meal;
