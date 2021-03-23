const auth = (req, res, next) => {
  console.log("Middleware ran");
  next();
};

module.exports = {
  auth,
};
