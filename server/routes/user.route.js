const router = require('express').Router();

const User = require('../models/user.model');

const userController = require('../controllers/user.controller');

router.get('/', (req, res) => {
  User.find({}, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.post('/login',userController.login);
router.post('/register',userController.signup);

module.exports = router;
