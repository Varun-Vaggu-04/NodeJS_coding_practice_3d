const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const todayDate = new Date()
  res.send(
    `${todayDate.getDate()}-${
      todayDate.getMonth() + 1
    }-${todayDate.getFullYear()}`,
  )
})

module.exports = app
