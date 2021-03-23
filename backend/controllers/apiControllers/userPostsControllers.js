const retrieveMostRecent = (req, res) => {
  // async database API request here
  res.send("List of most recent posts");
};

const makeUserPost = (req, res) => {
  // async post to database. This is a POST request so will return promise on front end
  res.json({
    status: req.body
  });
};

module.exports = {
  retrieveMostRecent,
  makeUserPost,
};
