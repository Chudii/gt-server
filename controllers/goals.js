const express = require('express')
const router = express.Router()
const Goals = require('../models/goals')

router.get('/', (req, res) => {
    Goals.find({}, (err, foundGoals) => {
        res.json(foundGoals)
    })
})

router.post('/', (req, res) => {
    Goals.create(req.body, (err, createdGoal) => {
        res.json(createdGoal)
    })
})

router.delete('/:id', (req, res) => {
    Goals.findByIdAndDelete(req.params.id, (err, foundGoal) => {
        res.redirect('/goals')
    })
})


module.exports = router