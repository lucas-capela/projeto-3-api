const router = require('express').Router();

const { isAuthenticated } = require('../middlewares/jwt.middleware'); 

const User = require('../models/User.model');
const Income = require('../models/income.model');
const Outcome = require('../models/outcome.model');
// List users
router.get('/', async (req, res, next) => {
  try {
    const usersFromDB = await User.find();
    res.status(200).json(usersFromDB);
  } catch (error) {
    next(error);
  }
})


  
  router.get('/profile', async (req, res, next) => {
    const userId = req.payload._id;
    try {
      const userFromDB = await User.findById(userId, { passwordHash: 0 });
      res.json(userFromDB);
    } catch (error) {
      next(error)
    }
  });

  router.get('/:userId/incomes', isAuthenticated, async (req, res, next) => {
    const userId = req.params.userId; 
    try {
      
      if (userId !== req.payload._id) {
        return res.status(403).json({ error: 'Acesso negado' });
      }
  
      const incomes = await Income.find({ user: userId });
  
      res.status(200).json({ incomes });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:userId/outcomes', isAuthenticated, async (req, res, next) => {
    const userId = req.params.userId; 
    try {
      
      if (userId !== req.payload._id) {
        return res.status(403).json({ error: 'Acesso negado' });
      }
  
      const outcomes = await Outcome.find({ user: userId });
  
      res.status(200).json({ outcomes });
    } catch (error) {
      next(error);
    }
  });
  
  

module.exports = router;