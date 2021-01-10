require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParses = require('body-parser')
const route = require('./src/routes/shops')

const app = express()


app.use(cors())
app.use(bodyParses.urlencoded({extended: false}))
app.use(bodyParses.json())
app.use(route)

app.listen(process.env.PORT, ()=> {
    console.log("Server is running")
})

