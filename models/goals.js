const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    goal: { type: String, required: true},
    measurability: { type: String, required: true },
    difficulty: { type: Number, required: true },
    category: { type: String, required: true },
    targetDate: { type: Date, required: true },
    reason: { type: String, required: false }
})

const Goals = mongoose.model('Goal', goalSchema)

module.exports = Goals