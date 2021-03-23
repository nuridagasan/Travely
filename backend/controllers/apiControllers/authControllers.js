const signupUser = (req, res) => {
  res.json({
    status: req.body,
  });
};

const loginUser = (req, res) => {
  res.json({
    status: req.body,
  });
};

module.exports = {
  signupUser,
  loginUser,
};
