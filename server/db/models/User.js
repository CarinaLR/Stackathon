const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: {
      args: true,
      msg: 'Email address already in use!',
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  },
  gender: {
    type: DataTypes.ENUM,
    values: ['male', 'female'],
    allowNull: false,
    validate: {
      isIn: [['male', 'female']],
    },
  },
  weight: {
    type: Sequelize.INTEGER,
    validate: {
      min: 100,
      max: 300,
    },
    isInt: {
      msg: 'Enter your weight in pounds',
    },
  },
  height: {
    type: Sequelize.INTEGER,
    validate: {
      min: 10,
      max: 100,
    },
    isInt: {
      msg: 'Enter your height in inches',
    },
  },
  dailyActivity: {
    type: Sequelize.STRING,
    values: [
      [
        'sedentary',
        'ligthly active',
        'moderate active',
        'very active',
        'extremely active',
      ],
    ],
    isIn: {
      args: [
        [
          'sedentary',
          'ligthly active',
          'moderate active',
          'very active',
          'extremely active',
        ],
      ],
      msg: 'Must be in lower cases',
    },
  },
});

// User.find({}).success(function(values) {
//   User.create({ name: 'Test', gender: 'malee' })
//     .success(function(model) {
//       console.log(model);
//     })
//     .error(function(err) {
//       console.log(err);
//     });
// });

module.exports = User;
