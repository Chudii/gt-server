const express = require('express')
const router = express.Router()
const Goals = require('../models/goals')

router.get('/goals', (req, res) => {
    Goals.find({}, (err, foundGoals) => {
        res.json(foundGoals)
    })
})

router.post('/goals', (req, res) => {
    Goals.create(req.body, (err, createdGoal) => {
        res.json(createdGoal)
    })
})


module.exports = router