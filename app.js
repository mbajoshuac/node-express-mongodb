const express = require('express')
const app = express()
const response = "./utils/response.js"


//middleswares
app.use(express.json())



// Return 404 if user hit a route that doesn't exist
app.use('*', (req, res) => {
    res.status(404).json(response(error, " This page does not exist", null))
})


module.exports = app