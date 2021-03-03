require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParses = require('body-parser')
const product = require('./src/routes/product')
const category = require('./src/routes/category')
const history = require('./src/routes/history')
const users = require('./src/routes/users')


const app = express()


app.use(cors())
app.use(bodyParses.urlencoded({extended: false}))
app.use(bodyParses.json())
app.use(product)
app.use(category)
app.use(history)
app.use(users)
app.use('/images', express.static('./public/images'))

app.listen(process.env.PORT, ()=> {
    console.log("Server is running")
})

