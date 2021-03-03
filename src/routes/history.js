const express = require('express')
const route = express.Router()
const { getAllHistory, insertHistory, updateHistory, deleteHistory, detailHistory } = require('../controllers/history')
const { authentication, authorizationAdmin} = require('../helpers/middleware/auth')
const { getAllHistory: allHistoryRedis } = require('../helpers/history')

route
    .get('/history', authentication, allHistoryRedis ,getAllHistory)
    .get('/detailhistory/:id', authentication, authorizationAdmin, detailHistory)
    .post('/history',authentication, insertHistory)
    .put('/history/:id',authentication, authorizationAdmin, updateHistory)
    .delete('/history/:id',authentication, authorizationAdmin, deleteHistory)
module.exports = route
