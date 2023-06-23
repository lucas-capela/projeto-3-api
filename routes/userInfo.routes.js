const router = require('express').Router();



const User = require('../models/User.model');


router.get('/', async (req, res, next) => {
    const userId = req.payload._id;
    try {
      const userFromDB = await User.findById(userId, { passwordHash: 0 });
      res.json(userFromDB);
    } catch (error) {
      next(error)
    }
  });

  module.exports = router;