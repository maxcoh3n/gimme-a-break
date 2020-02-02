const express = require("express");
const router = express.Router();
const User = require("../models/user_model");

// Getting all activities
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one
router.get("/:id", getUser, (req, res) => {
    res.json(res.user);
});

// Creating one
router.post("/", async (req, res) => {
    const user = new User({
        Username: req.body.Username,
        Yoga: req.body.Yoga,
        Entertainment: req.body.Entertainment,
        Education: req.body.Education,
        Fitness: req.body.Fitness
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating one
router.patch("/:id", getUser, async (req, res) => {
    if (req.body.Username != null) {
        res.user.Username = req.body.Username;
    }
    if (req.body.Interval != null) {
        res.user.Interval = req.body.Interval;
    }
    if (req.body.Yoga != null) {
        res.user.Yoga = req.body.Yoga;
    }
    if (req.body.Entertainment != null) {
        res.user.Entertainment = req.body.Entertainment;
    }
    if (req.body.Education != null) {
        res.user.Education = req.body.Education;
    }
    if (req.body.Fitness != null) {
        res.user.Fitness = req.body.Fitness;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting one
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.getUser.remove();
        res.json({ message: "Deleted User" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req, res, next) {
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: "Cannot find user" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}

module.exports = router;
