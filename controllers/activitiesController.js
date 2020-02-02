const express = require('express')
const router = express.Router()
const BreakActivity = require('../models/breakactivity')

// Getting all activities
router.get('/', async (req, res) => {
    try {
        const breakactivities = await BreakActivity.find()
        res.json(breakactivities+"hello")
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// ERROR HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Getting one
router.get('/:id', getBreakActivity, (req, res) => {
    //res.json(res.breakactivity)
    let a = req.body.Username;
    const user = {
        "Username": a,
        "Interval": a,
        "Yoga": a,
        "Entertainment":a,
        "Education": a,
        "Fitness": a
    };
    // "Username": req.body.Username,
    // "Interval": req.body.Interval,
    // "Yoga": req.body.Yoga,
    // "Entertainment": req.body.Entertainment,
    // "Education": req.body.Education,
    // "Fitness": req.body.Fitness
    res.json(req.body.Username + "t"); //prints undefined - FIND OUT WHY
})



router.get('/:name', async (req, res) => {
    try {
        const breakactivities = await BreakActivity.find()
        //res.json(breakactivities); 

        const user = {
            Username: req.body.Username,
            Interval: req.body.Interval,
            Yoga: req.body.Yoga,
            Entertainment: req.body.Entertainment,
            Education: req.body.Education,
            Fitness: req.body.Fitness
        };
        //res.json(user);

        const max_Length =  user.Interval/4;
        console.log("Boop");
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

// Creating one
router.post('/', async (req, res) => {
    const breakactivity = new BreakActivity({
        name: req.body.name,
        description: req.body.description,
        breakactivityType: req.body.breakactivityType,
        duration: req.body.duration
    })

    try {
        const newBreakActivity = await breakactivity.save()
        res.status(201).json(newBreakActivity)
    } catch (err) { 
        res.status(400).json({ message: err.message })
    }
})

// Updating one
router.patch('/:id', getBreakActivity, async (req, res) => {
    if (req.body.name != null) {
        res.breakactivity.name = req.body.name
    }
    if (req.body.description != null) {
        res.breakactivity.description = req.body.description
    }
    if (req.body.breakactivityType != null) {
        res.breakactivity.breakactivityType = req.body.breakactivityType
    }
    if (req.body.duration != null) {
        res.breakactivity.duration = req.body.duration
    }
    
    try {
        const updatedBreakActivity = await res.breakactivity.save()
        res.json(updatedBreakActivity)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting one
router.delete('/:id', getBreakActivity, async (req, res) => {
    try {
        await res.breakactivity.remove()
        res.json({ message: 'Deleted break activity' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getBreakActivity(req, res, next) {
    try {
        breakactivity = await BreakActivity.findById(req.params.id)
        if (breakactivity == null) {
            return res.status(404).json({ message: 'Cannot find break activity' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.breakactivity = breakactivity
    next()
}

module.exports = router