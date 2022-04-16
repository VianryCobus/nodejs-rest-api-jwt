const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");

// verify as a middleware
router.get("/", verify, async (req, res) => {
  // res.json({
  //   posts: {
  //     title: "my first post",
  //     description: "random data you shouldn't access",
  //   },
  // });
  // res.send(req.user);
  const user = await User.findOne({
    _id: req.user,
  });
  res.send(user);
});

module.exports = router;
