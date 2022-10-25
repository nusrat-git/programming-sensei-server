const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())

const categories = require('./data/categories.json');
const classes = require('./data/classes.json');


app.get('/classes', (req, res) => {
    res.send(categories)
})

app.get('/classes/:id', (req, res) => {
    const id = req.params.id;
    const selected = classes.filter(cls => cls.category_id == id);
    res.send(selected);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})