'use strict';

const router = require('express').Router();
const User = require('../db/models/User');

// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))

//=============USER==ROUTERS==============================

router.get('/users', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/users/:id', async (req, res, next) => {
  try {
    const userById = await User.findById(req.params.id);
    res.json(userById);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/user', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      res.json(newUser.dataValue);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/users/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id);
    await foundUser.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//==============MEAL===ROUTERS===============================

router.get('/meals', async (req, res, next) => {
  try {
    const allmeals = await Meal.findAll();
    res.json(allmeals);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/meals/:id', async (req, res, next) => {
  try {
    const mealById = await Meal.findById(req.params.id);
    res.json(mealById);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/meal', async (req, res, next) => {
  try {
    const newMeal = await Meal.create(req.body);
    if (newMeal) {
      res.json(newMeal.dataValue);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/meals/:id', async (req, res, next) => {
  try {
    const foundMeal = await Meal.findById(req.params.id);
    await foundMeal.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
