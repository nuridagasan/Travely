const express = require("express");
const userPostsControllers = require("../../controllers/apiControllers/userPostsControllers");
const authControllers = require('../../controllers/apiControllers/authControllers')
const {auth} = require('../../middleware/authMiddleware/auth')
// SERVE HOMEPAGE
const router = express.Router();

router.get("/api/latestPosts", auth, userPostsControllers.retrieveMostRecent);
router.post("/api/makeUserPost", userPostsControllers.makeUserPost);

router.post('/api/signup', authControllers.signupUser)
router.post('/api/login', authControllers.loginUser)

module.exports = {
  router,
};
