const router = require('express').Router();

const Income = require('../models/income.model');

router.post('/', async(req,res,next)=> {
    const {description, value} = req.body;
    try {
        if(!value){
            const error = new Error ('you have to set a Value');
            error.code = 400;
            throw error;
        }
        const newIncome = await Income.create({description, value});
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(500).json({description: 'It was not possible to create this income'});
    }
})

router.get('/', async (req,res,next) => {
    try {
        const incomesFromDB = await Income.find();
        res.status(200).json(incomesFromDB);
    } catch (error) {
        res.status(500).json({description: 'Error finding the incomes', error})
    }
})

router.put('/:incomeId', async(req,res,next)=> {
    const {incomeId} = req.params;
    try {
        const singleIncome = await Income.findByIdAndUpdate(incomeId,req.body, {new:true});
        res.status(200).json(singleIncome);
    } catch (error) {
        next(error);
    }
})

router.delete('/:incomeId', async(req,res,next)=>{
    const {incomeId} = req.params;
    try {
        await Income.findByIdAndRemove(incomeId);
        res.status(204).json();
    } catch (error) {
        next(error);
    }
})



module.exports = router;