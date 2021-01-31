const { promise } = require('express')
const conn = require('../config/config')

module.exports = {
    modelAllHistoryForRedis: () =>{
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM history`, (err, result) => {
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelAllHistory: () =>{
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM history`, (err, result) => {
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelInsertHistory: (data) =>{
        return new Promise((resolve, reject)=>{
            conn.query(`INSERT INTO history (invoice, cashier, orders, amount) VALUES ('${data.invoice}', '${data.cashier}', '${data.orders}', '${data.amount}')`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelUpdateHistory: (data, id) => {
        return new Promise((resolve, reject) =>{
            conn.query(`UPDATE history SET cashier='${data.cashier}', orders='${data.orders}', amount='${data.amount}' WHERE invoice='${id}'`, (err, result) =>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelDeleteHistory: (id) =>{
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM history WHERE invoice='${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    getDetailHistory: (id) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM history WHERE invoice = '${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    }
}