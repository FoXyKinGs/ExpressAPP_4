const client = require('../config/config_redis')
const { success, failed } = require('../helpers/response')

module.exports = {
    getAllHistory: (req, res, next) => {
        client.get('dataHistory', (err, result) => {
            if(err){
                failed(res, 'Internal Server Error', {})
            }else{
                if(result){
                    const response = JSON.parse(result)
                    success(res, 'Get all history success', [], response)
                }else{
                    next()
                }
                
            }
        })
    }
}