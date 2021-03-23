const {render} = require('ejs')
const homepageController = (req, res) => {
  res.render("index");
};
const signupController = (req, res) => {
  res.render("signup");
};
const loginController = (req, res) => {
  res.render("login");
};

module.exports = {
  homepageController,
  signupController,
  loginController,
};
