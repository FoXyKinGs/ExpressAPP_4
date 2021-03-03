const express = require('express')
const route = express.Router()
const { getAllProduct, insertProduct, updateProduct, deleteProduct, detailProduct } = require('../controllers/product')
const { authentication, authorizationAdmin, authorizationCashier } = require('../helpers/middleware/auth')
const { getAllProduct: redisAllProduct } = require('../helpers/product')
const singleUpload = require('../helpers/middleware/upload')

route
    .get('/product', authentication, redisAllProduct ,getAllProduct)
    .get('/detailproduct/:id', authentication, authorizationAdmin, detailProduct)
    .post('/product', authentication, singleUpload, insertProduct)
    .put('/product/:id', authentication, singleUpload, updateProduct)
    .delete('/product/:id', authentication, deleteProduct)
module.exports = route
