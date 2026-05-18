const express = require('express');
const router = express.Router();

// Controllers
const ctrlTravel = require('../controllers/travel');
const ctrlAbout = require('../controllers/about');
const ctrlRooms = require('../controllers/rooms');
const ctrlMeals = require('../controllers/meals');
const ctrlNews = require('../controllers/news');
const ctrlContact = require('../controllers/contact');
const ctrlIndex = require('../controllers/index');

// Routes
router.get('/', ctrlIndex.index);
router.get('/travel', ctrlTravel.travel);
router.get('/about', ctrlAbout.about);
router.get('/rooms', ctrlRooms.rooms);
router.get('/meals', ctrlMeals.meals);
router.get('/news', ctrlNews.news);
router.get('/contact', ctrlContact.contact);
router.get('/index', ctrlIndex.index);

module.exports = router;