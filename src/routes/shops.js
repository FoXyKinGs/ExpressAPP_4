const express = require('express')
const route = express.Router()
const { getAllProduct , getAllCategory, getAllHistory, insertCategory, insertProduct, insertHistory, updateCategory, updateProduct, updateHistory, deleteCategory, deleteProduct, deleteHistory, searchProduct, sortingProduct} = require('../controllers/shops')

route
    /*-----------------
            CRUD
      -----------------*/ 
    .get('/product', getAllProduct)
    .get('/category', getAllCategory)
    .get('/history', getAllHistory)
    .post('/category', insertCategory)
    .post('/product', insertProduct)
    .post('/history', insertHistory)
    .put('/category/:id', updateCategory)
    .put('/product/:id', updateProduct)
    .put('/history/:id', updateHistory)
    .delete('/category/:id', deleteCategory)
    .delete('/product/:id', deleteProduct)
    .delete('/history/:id', deleteHistory)
    /*-----------------
        End of CRUD
      -----------------*/
        
    .get('/searchproduct/:name', searchProduct)
    .get('/sortproduct/:name/:by', sortingProduct)
module.exports = route