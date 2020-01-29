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
    values: ['protein', 'vegetable', 'fruit', 'carb', 'fats', 'sweets'],
    allowNull: false,
    validate: {
      isIn: [['protein', 'vegetable', 'fruit', 'carb', 'fats', 'sweets']],
    },
  },
  calories: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 5000,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Meal;
