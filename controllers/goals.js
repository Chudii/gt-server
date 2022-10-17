const express = require('express')
const router = express.Router()
const Goals = require('../models/goals')

router.get('/', (req, res) => {
    Goals.find({}, (err, foundGoals) => {
        res.json(foundGoals)
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    Goals.create(req.body, (err, createdGoal) => {
        res.json(createdGoal)
    })
})


module.exports = router