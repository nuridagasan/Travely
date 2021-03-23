const express = require('express');
const pageControllers = require('../../controllers/pageControllers')
// SERVE HOMEPAGE
const router = express.Router()

router.get('/', pageControllers.homepageController)
router.get('/signup', pageControllers.signupController)
router.get('/login',pageControllers.loginController)

module.exports = {
  router,
};
