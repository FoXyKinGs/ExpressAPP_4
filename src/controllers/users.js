const bcrypt = require('bcrypt')
const { json } = require('body-parser')
const { response } = require('express')
const { failed, success } = require('../helpers/response')
const { modelRegister, modelCheckEmail, modelChangePassword } = require('../models/users')
const jwt = require('jsonwebtoken') 

module.exports = {
    login: async(req, res) => {
        const body = req.body
        modelCheckEmail(body.email).then(async(response) => {
            if(response.length === 1){
                const checkPassword = await bcrypt.compare(body.password, response[0].password)
                if(checkPassword){
                    const dataUser = {
                        email: response[0].email,
                        id: response[0].id,
                        access: response[0].access 
                    }
                    const token = jwt.sign(dataUser, process.env.JWT_SECRET)
                    success(res, 'Login success', [], token)
                }else{
                    failed(res, 'Failed to login, password wrong', [])
                }
            }else{
                failed(res,  "Email didn't registered", [])
            }
        }).catch((err) => {
            failed(res, 'Internal server error', [])
        })
    },

    register: async(req, res) => {
        const body = req.body
        modelCheckEmail(body.email).then(async(response) => {
            if(response.length >= 1){
                failed(res, 'Email registered', [])
            }else{
                const salt = await bcrypt.genSalt(10)
                const password = await bcrypt.hash(body.password, salt)
                const user = {
                    name: body.name,
                    email: body.email,
                    access: body.access,
                    password
                }
                modelRegister(user).then((response) => {
                    success(res, 'Success register', [], response)
                }).catch((err) => {
                    failed(res, 'Internal server error')
                })
            }
        }).catch((err) => {
            failed(res, 'Internal server error', [])
        })        
    },

    changePassword: async(req, res) => {
        const val = req.params.email
        const body = req.body
        modelCheckEmail(val).then(async(response) => {
            if(response.length < 1){
                failed(res, 'Email not registered')
            }else{
               const salt = await bcrypt.genSalt(10)
               const password = await bcrypt.hash(body.password, salt)
            modelChangePassword(password, val).then((response) => {
                success(res, 'Change password success', [], [])
            }).catch((err) => {
                failed(res, 'Cannot change password', [])
            })
            }
        }).catch((err) => [
            failed(res, 'Internal server error', [])
        ])
    }
}