const router = require('express').Router();

const { isAuthenticated } = require('../middlewares/jwt.middleware'); 

const User = require('../models/User.model');

// List users
router.get('/', async (req, res, next) => {
  try {
    const usersFromDB = await User.find();
    res.status(200).json(usersFromDB);
  } catch (error) {
    next(error);
  }
})

// adicionar uma receita ao usuário
router.post('/add-incomes/:incomeId', isAuthenticated, async (req, res, next) => {
    const { incomeId } = req.params;
    const userId = req.payload._id;
    try {
      const userFromDB = await User.findByIdAndUpdate(userId, { $push: { incomes: incomeId } }, { new: true });
      res.status(200).json(userFromDB);
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/profile', async (req, res, next) => {
    const userId = req.payload._id;
    try {
      const userFromDB = await User.findById(userId, { passwordHash: 0 });
      res.json(userFromDB);
    } catch (error) {
      next(error)
    }
  });



module.exports = router;