const express = require('express')
const route = express.Router()
const { getAllCategory, insertCategory, updateCategory, deleteCategory } = require('../controllers/category')
const { authentication } = require('../helpers/middleware/auth')

route
    .get('/category', authentication, getAllCategory)
    .post('/category', authentication, insertCategory)
    .put('/category/:id', authentication, updateCategory)
    .delete('/category/:id', authentication, deleteCategory)
module.exports = route