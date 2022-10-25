const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const categories = require('./data/categories.json');
const classes = require('./data/classes.json');


app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/classes', (req, res) => {
  res.send(classes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})