const express = require('express')
const app = express()
const { isAuth } = require('./middlewares')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', isAuth, require('./auth.routes'))
app.use('/', require('./guest.routes'))

app.use((_, res) => res.status(404).send({ message: 'Not found.' }))

module.exports = app
