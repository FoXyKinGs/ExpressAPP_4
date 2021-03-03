const client = require('../config/config_redis')
const _ = require('lodash')
const { success, failed } = require('../helpers/response')

module.exports = {
    getAllProduct: (req, res, next) => {
        client.get('dataProduct', (err, result) => {
            if(err){
                failed(res, 'Internal Server Error', {})
            }else{
                if(result){
                    const response = JSON.parse(result)
                    const name = req.query.name ? req.query.name : ''
                    const order = req.query.order ? req.query.order : 'id'
                    const by = req.query.by ? req.query.by : 'ASC'
                    const limit = req.query.limit ? req.query.limit : 9
                    const page = req.query.page ? req.query.page : 1
                    const offset = page === 1 ? 0 : (page-1) * limit
                    const filterData = _.filter(response, (item) => {
                        const value = name.toLowerCase()
                        const dbvalue = item.product_name.toLowerCase()
                        return dbvalue.includes(value)
                    })
                    const orderBy = _.orderBy(filterData, [order], [by])
                    const paginationData = _.slice(orderBy, offset, offset+parseInt(limit))
                    const pagination = {
                        page: page,
                        limit: limit,
                        totalData: response.length,
                        totalPage: Math.ceil(filterData.length / limit)
                    }
                    success(res, 'Succes get all product', pagination, paginationData)
                }else{
                    next()
                }
            }
        })
    }
}