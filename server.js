const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const Goals = require('./models/goals')

const app = express()
const mongoURI = process.env.MONGO_URI
const port = process.env.PORT || 3001

const db = mongoose.connection

mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

db.on('error', err => console.log(err.message + ' is Mongodb not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

const goalsController = require('./controllers/goals')

app.use('/goals', goalsController)

app.listen(port, () => {
  console.log(`*** Listening on http://localhost:${port} ***`)
}) 