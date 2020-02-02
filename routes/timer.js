const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    console.log(req)

    setInterval(countdown, 1000)

    let hours = 10
    let minutes = 10
    let seconds = 10

    res.render('timer', { 
        hours : hours,
        minutes : minutes,
        seconds : seconds
    })
})

/*
router.post('/', (req, res) => {

    console.log(req)

    setInterval(countdown, 1000)

    let hours = req.body.hours
    console.log(hours)
    let minutes = req.body.minutes
    let seconds = req.body.seconds

    res.render('timer', { 
        hours : hours,
        minutes : minutes,
        seconds : seconds
    })
})
*/

function countdown() {
    seconds--
}

module.exports = router;