const goalsData = [
    {
        goal: 'Finish Something',
        measurability: { type: String, required: true },
        difficulty: { type: Number, required: true },
        category: { type: String, required: true },
        targetDate: { type: Date, required: true },
        reason: { type: String, required: false }
    }
]