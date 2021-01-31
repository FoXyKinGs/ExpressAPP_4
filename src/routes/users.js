const { login, register, changePassword } = require('../controllers/users')
const express = require('express')

const Router = express.Router()

Router
  .post('/login', login)
  .post('/register', register)
  .patch('/changepassword/:email', changePassword)

module.exports = Router
