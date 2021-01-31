const { response } = require('express')
const { modelAllCategory, modelInsertCategory, modelUpdateCategory, modelDeleteCategory } = require("../models/category")
const { success, failed } = require('../helpers/response')
module.exports = {
    getAllCategory: (req, res) => {
        modelAllCategory()
        .then((response) => {
            success(res, 'Get all Category success', {} , response)
        }).catch((err) => {
            failed(res, 'Internal server error, ', err.message)
        })
    },

    insertCategory: (req, res) => {
        const data = req.body
        modelInsertCategory(data)
        .then((response) => {
            success(res, 'Insert data category success', {} , response)
        }).catch((err) => {
            failed(res, 'Internal server error, ', err.message)
        })
    },

    updateCategory: (req, res) => {
        const id = req.params.id
        const data = req.body
        modelUpdateCategory(data, id)
        .then((response) => {
            success(res, 'Update data category success', {} , response)
        }).catch((err) => {
            failed(res, 'Internal server error, ', err.message)
        })
    },

    deleteCategory: (req, res)=>{
        const id = req.params.id
        modelDeleteCategory(id)
        .then((response)=>{
            success(res, 'Data deleted', {} , response)
        }).catch((err)=>{
            failed(res, 'Internal server error, ', err.message)
        })
    }
}