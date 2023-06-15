const router = require("express").Router();
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Income = require("../models/income.model");
const Outcome = require("../models/outcome.model");

router.get("/", isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id;

  try {
    const userOutcome = await Outcome.find({ user: userId });
    const userIncome = await Income.find({ user: userId });
    const response = {
      incomes: userIncome,
      outcomes: userOutcome,
    };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

router.get('/:month/:year', isAuthenticated, async(req,res,next)=>{
    const userId = req.payload._id;
    const {month,year} = req.params;

    const monthlyOutcome = await Outcome.find({user: userId, month:month, year:year });
    const monthlyIncome = await Income.find({user: userId, month:month, year:year });

    const response = {
        incomes: monthlyIncome,
        outcomes:monthlyOutcome
    }

    res.status(200).json(response);
try {
    
} catch (error) {
    next(error);
}
})

module.exports = router;
