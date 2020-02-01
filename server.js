const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')

require('dotenv').config()

const indexRouter = require('./routes/index')
const breakactivitiesRouter = require('./routes/breakactivities')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/breakactivities', breakactivitiesRouter)

app.listen(3000, () => console.log('Server started on port 3000'))