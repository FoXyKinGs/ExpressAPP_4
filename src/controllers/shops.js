const { response } = require('express')
const { modelAllProduct, modelAllCategory, modelAllHistory, modelInsertCategory, modelInsertProduct, modelInsertHistory, modelUpdateCategory, modelUpdateProduct, modelUpdateHistory, modelDeleteCategory, modelDeleteProduct, modelDeleteHistory, modelSearchProduct, modelSortingProduct} = require('../models/shops')

module.exports = {
    getAllProduct: (req, res) => {
        modelAllProduct()
         .then((response) => {
            res.json(response)
        }).catch((err) => {
            console.log(err.message)
        })
    },
    getAllCategory: (req, res) => {
        modelAllCategory()
        .then((response) => {
            res.json(response)
        }).catch((err) => {
            console.log(err.message)
        })
    },
    getAllHistory: (req, res) => {
        modelAllHistory()
        .then((response) => {
            res.json(response)
        }).catch((err) => {
            console.log(err.message)
        })
    },
    insertCategory: (req, res) => {
        const data = req.body
        modelInsertCategory(data)
        .then((response) => {
            res.json({
                Message: "Succes"
            })
        }).catch((err) => {
            console.log(err.message)
        })
    },
    insertProduct: (req, res) => {
        const data = req.body
        modelInsertProduct(data)
        .then((response) => {
            res.json({
                Message: "Succes"
            })
        }).catch((err) => {
            console.log(err.message)
        })
    },
    insertHistory: (req, res) => {
        const data = req.body
        modelInsertHistory(data)
        .then((response) => {
            res.json({
                Message: "Succes"
            })
        }).catch((err) => {
            console.log(err.message)
        })
    },
    updateCategory: (req, res) => {
        const id = req.params.id
        const data = req.body
        modelUpdateCategory(data, id)
        .then((response) => {
            res.json({
                Message: "Succes"
            })
        }).catch((err) => {
            console.log(err.message)
        })
    },
    updateProduct: (req, res) => {
        const id = req.params.id
        const data = req.body
        modelUpdateProduct(data, id)
        .then((response) => {
            res.json({
                Message: "Succes"
            })
        }).catch((err) => {
            console.log(err.message)
        })
    },
    updateHistory: (req, res) => {
        const id = req.params.id
        const data = req.body
        modelUpdateHistory(data, id)
        .then((response) => {
            res.json({
                Message: "Succes"
            })
        }).catch((err) => {
            console.log(err.message)
        })
    },
    deleteCategory: (req, res)=>{
        const id = req.params.id
        modelDeleteCategory(id)
        .then((response)=>{
            res.json({
                Message: "Succes"
            })
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    deleteProduct: (req, res)=>{
        const id = req.params.id
        modelDeleteProduct(id)
        .then((response)=>{
            res.json({
                Message: "Succes"
            })
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    deleteHistory: (req, res)=>{
        const id = req.params.id
        modelDeleteHistory(id)
        .then((response)=>{
            res.json({
                Message: "Succes"
            })
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    searchProduct: (req, res)=>{
        const name = req.params.name
        modelSearchProduct(name)
        .then((response)=>{
            res.json(response)
        }).catch((err)=>{ 
            console.log(err.message)
        })
    },
    sortingProduct: (req, res)=>{
        const name = req.params
        const by = req.params.by
        modelSortingProduct(name, by)
        .then((response)=>{
            res.json(response)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}