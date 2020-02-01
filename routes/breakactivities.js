const express = require('express')
const router = express.Router()
const BreakActivity = require('../models/breakactivity')

// Getting all activities
router.get('/', async (req, res) => {
    try {
        const breakactivities = await BreakActivity.find()
        res.json(breakactivities)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting one
router.get('/:id', getBreakActivity, (req, res) => {
    res.json(res.breakactivity)
})

// Creating one
router.post('/', async (req, res) => {
    const breakactivity = new BreakActivity({
        name: req.body.name,
        description: req.body.description,
        breakactivityType: req.body.breakactivityType
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