const { response } = require('express')
const { modelAllHistory, modelInsertHistory, modelUpdateHistory, modelDeleteHistory, getDetailHistory, modelAllHistoryForRedis } = require("../models/history")
const { success, failed, notFound } = require('../helpers/response')

const redisClient = require('../config/config_redis')

module.exports = {
    setDataRedis: () => {
        modelAllHistoryForRedis().then((response) => {
            const data = JSON.stringify(response)
            redisClient.set('dataHistory', data)
        }).catch((err) => {
            failed(res, 'Internal server error ', err.message)
        })
    },
    getAllHistory: (req, res) => {
        modelAllHistory()
        .then((response) => {
            module.exports.setDataRedis()
            success(res, 'Get all History success', {} , response)
        }).catch((err) => {
            failed(res, 'Internal server error ', err.message)
        })
    },

    insertHistory: (req, res) => {
        const data = req.body
        modelInsertHistory(data)
        .then((response) => {
            module.exports.setDataRedis()
            success(res, 'Insert data history success', {} , response)
        }).catch((err) => {
            failed(res, 'Internal server error ', err.message)
        })
    },

    updateHistory: (req, res) => {
        const id = req.params.id
        const data = req.body
        modelUpdateHistory(data, id)
        .then((response) => {
            module.exports.setDataRedis()
            success(res, 'Update data history success', {} , response)
        }).catch((err) => {
            failed(res, 'Internal server error ', err.message)
        })
    },

    deleteHistory: (req, res)=>{
        const id = req.params.id
        modelDeleteHistory(id)
        .then((response)=>{
            module.exports.setDataRedis()
            success(res, 'Data deleted', {} , response)
        }).catch((err)=>{
            failed(res, 'Internal server error ', err.message)
        })
    },

    detailHistory: (req, res) =>{
        const id = req.params.id
        getDetailHistory(id)
        .then((response) => {
            if (response.length <= 0) {
                notFound(res, 'Error data not found')
            } else {
                success(res,'Success get detail product' , {}, response)
            }
        }).catch((err)=>{
            failed(res, 'Internal server error ', err.message)
        }) 
        
    }
}