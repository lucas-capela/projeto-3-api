const router = require('express').Router();

const Outcome = require('../models/outcome.model');

router.post('/', async (req,res,next)=> {
    const {description, value, expenseType,month,year} = req.body;
    const user = req.payload._id;
    try {
        if(!value){
            throw new Error ('you have to set a value');
        }

        const newOutcome = await Outcome.create({description, value, expenseType,month,year,user});
        res.status(201).json(newOutcome);
    } catch (error) {
        res.status(500).json({description: 'It was not possible to create this outcome'});
        console.log(error);
    }
})

router.get('/', async (req,res,next)=> {
    try {
        const outcomesFromDB = await Outcome.find();
        res.status(200).json(outcomesFromDB);
    } catch (error) {
        next(error)
    }
})

router.put('/:outcomeId', async(req,res,next)=>{
    const {outcomeId} = req.params;
    try {
        const updatedOutcome = await Outcome.findByIdAndUpdate(outcomeId,req.body, {new:true});
        res.status(200).json(updatedOutcome);
    } catch (error) {
        next(error);
    }
})

router.delete('/:outcomeId', async(req,res,next)=>{
    const {outcomeId} = req.params;
    try {
        await Outcome.findByIdAndRemove(outcomeId);
        res.status(204).json();

    } catch (error) {
        next(error);
    }
})

module.exports = router;