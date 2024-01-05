require('dotenv').config();
const express = require('express')
const app = express()
const port = 8600

app.get('/', (req, res) => {
    res.send('Hello World!') //refer more in express documentation
})

app.get('/profile', (req, res) => {
    res.send('Hello Manish!') //refer more in express documentation
})

app.get('/product', (req, res) => {
    res.send('Nothing') //refer more in express documentation
})

app.get('/newone', (req, res) => {
    res.send('World!') //refer more in express documentation

    // can also can cookies and jsx
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
});