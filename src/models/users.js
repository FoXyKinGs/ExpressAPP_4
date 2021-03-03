const { response } = require('express')
const conn = require('../config/config')

module.exports = {
    modelLogin: () => {
        return
    },
    modelCheckEmail: (email) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
                if(err){
                    reject(new Error())
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelRegister: (dataUser) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO users SET ?`, dataUser, (err, response) =>{
                if(err){
                    reject(new Error())
                }else{
                    resolve(response)
                }
            })
        })
    }
}