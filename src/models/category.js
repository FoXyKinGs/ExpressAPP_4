const { promise } = require('express')
const conn = require('../config/config')

module.exports = {
    modelAllCategory: () => {
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT * FROM category`, (err, result) =>{
                if(err){
                    reject(new Error('Caught something error'))
                }else{
                    resolve(result)
                }
            })
        })
    }, 

    modelInsertCategory: (data) =>{
        return new Promise((resolve, reject)=>{
            conn.query(`INSERT INTO category (id, category_name) VALUES ('${data.id}', '${data.category_name}')`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelUpdateCategory: (data, id) =>{
        return new Promise((resolve, reject)=>{
            conn.query(`UPDATE category SET id='${data.id}', category_name='${data.category_name}' WHERE id='${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelDeleteCategory: (id) =>{
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM category WHERE id='${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    }
}