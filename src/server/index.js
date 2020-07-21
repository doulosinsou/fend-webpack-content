var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/distindex.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3001, function () {
    console.log('Running on port 3001')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
