const express = require('express')
const router = express.Router()
const Goals = require('../models/goals')

router.get('/', (req, res) => {
    Goals.find({}, (err, foundGoals) => {
        res.json(foundGoals)
    })
})

// router.get('/:id', (req, res) => {
//     Goals.findById(req.params.id, (err, foundGoal) => {
//         res.json(foundGoal)
//     })
// })

router.post('/', (req, res) => {
    Goals.create(req.body, (err, createdGoal) => {
        res.json(createdGoal)
    })
})

router.put('/:id', (req, res) => {
    Goals.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGoal) => {
        res.json(updatedGoal)
    })
})

router.delete('/:id', (req, res) => {
    Goals.findByIdAndDelete(req.params.id, (err, foundGoal) => {
        res.redirect('/goals')
    })
})


module.exports = router