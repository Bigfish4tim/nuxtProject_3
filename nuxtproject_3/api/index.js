import express from 'express'
const app = express()

// app.post('/', (req, res) => {
//     console.log('/api/')
//     res.send("API test")
// })

app.get('/', (req, res) => {
    res.send("TEST " + Math.random())
})
app.use('/hello', require('./hello'))

module.exports = {
    path: '/api',
    handler: app
}