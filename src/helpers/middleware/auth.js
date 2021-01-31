const jwt = require('jsonwebtoken')
const { forbidden, failed, unauthorized } = require('../response')
module.exports = {
    authentication: (req, res, next) => {
        const headers = req.headers
        if(!headers.token){
            unauthorized(res, "Token required")
        }else{
            jwt.verify(headers.token, process.env.JWT_SECRET, (err, decoded) => {
                if(err){
                    failed(res, "Token doesn't valid", [])
                }else{
                    res.userAccess = decoded.access
                    next()
                }
            })
        }
    },

    authorizationAdmin: (req, res, next) => {
        const access = res.userAccess
        if(access === 0){
            next()
        }else{
            forbidden(res, 'cannot acces this endpoint')
        }
    },

    authorizationCashier: (req, res, next) => {
        const access = res.userAccess
        if(access === 1){
            next()
        }else{
            forbidden(res, 'cannot acces this endpoint')
        }
    }
}