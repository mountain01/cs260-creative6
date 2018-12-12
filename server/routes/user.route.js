const router = require('express').Router();

const User = require('../models/user.model');

router.get('/', (req, res) => {
  User.find({}, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
