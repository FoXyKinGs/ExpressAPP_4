const { response } = require('express')
const { modelAllProduct, modelInsertProduct, modelUpdateProduct, modelDeleteProduct, getDetailProduct, modelTotalProduct, modelAllProductForRedis } = require("../models/product")

const { success, failed, notFound, noContent } = require('../helpers/response')

const redisClient = require('../config/config_redis')
const multer = require('multer')
const fs = require('fs')


module.exports = {
    setDataRedis: () => {
        modelAllProductForRedis().then((response) => {
            const data = JSON.stringify(response)
            redisClient.set('dataProduct', data)
        }).catch((err) => {
            failed(res, 'Internal server error ', err.message)
        })
    },
    getAllProduct: async(req, res)=>{
        try {
        const name = req.query.name ? req.query.name : ''
        const order = req.query.order ? req.query.order : 'product.id'
        const by = req.query.by ? req.query.by : 'ASC'
        const limit = req.query.limit ? req.query.limit : 9
        const page = req.query.page ? req.query.page : 1
        const offset = page === 1 ? 0 : (page-1)*limit
        const responseTotal = await modelTotalProduct()
        modelAllProduct(name, order, by, offset, limit)
        .then((response)=>{
            const arr = []
            response.forEach(element => {
                arr.push({
                    id: element.id,
                    id_category: element.id_category,
                    name: element.product_name,
                    image: element.image,
                    price: element.price,
                    category: element.category_name
                })
            });

            const pagination = {
                message: 'data from database',
                page: page,
                limit: limit,
                totalData: responseTotal[0].total,
                totalPage: Math.ceil(responseTotal[0].total / limit)
            }
            if (arr.length <= 0) {
                noContent(res, `There is no data that's you mean`, {})
            } else {
                module.exports.setDataRedis()
                success(res,'Success get product' , pagination, arr)
            }
        }).catch((err)=>{ 
            failed(res, 'Internal server error ', err.message)
        })
        } catch (error) {
           failed(res, 'Internal server error ', [])
        }
        
    },

    insertProduct: (req, res) => {
        const rawData = req.body
        const path = './public/images/'
        if (!rawData.id_category || !rawData.product_name || !rawData.price ) {
            fs.unlink(path + req.file.filename, (err) => {
                if(err){
                    failed(res, 'Cannot delete image', {})
                    return
                }
            })
            failed(res, 'Error data corrupted', {})
        } else {
            const data = {
                id_category: rawData.id_category,
                product_name: rawData.product_name,
                image: req.file.filename,
                price: rawData.price
            }
            modelInsertProduct(data)
            .then((response) => {
                module.exports.setDataRedis()
                success(res,'Insert data product success' , {}, [])
            }).catch((err) => {
                failed(res, 'Internal server error ', err.message)
            })
        }
    },

    updateProduct: async(req, res) => {
        try {
        const id = req.params.id
        const rawData = req.body
        const path = './public/images/'
        const img = await getDetailProduct(id)
        fs.unlink(path + img[0].image, (err) => {
            if(err){
                failed(res, 'Cannot Replace Image', err)
                return
            }
        })
        const data = {
            id_category: rawData.id_category,
            product_name: rawData.product_name,
            image: req.file.filename,
            price: rawData.price
        }
        modelUpdateProduct(data, id)
        .then((response) => {
            module.exports.setDataRedis()
            success(res,'Update data product success' , {}, [])
        }).catch((err) => {
            failed(res, 'Internal server error ', err.message)  
        }) 
        } catch(err){
            failed(res, 'Internal server error ', [])
        }
    },

    deleteProduct: async(req, res)=>{
        try{
        const id = req.params.id
        const path = './public/images/'
        const img = await getDetailProduct(id)
        fs.unlink(path + img[0].image, (err) => {
            if(err){
                failed(res, 'Image corupt', err)
                return
            }
        })
        modelDeleteProduct(id)
        .then((response)=>{
            module.exports.setDataRedis()
            success(res, 'Data deleted', {}, [])
        }).catch((err)=>{
            failed(res, 'Internal server error ', err.message)
        })
    }catch(err){
        failed(res, 'Internal server error', [])
    }
    },
    detailProduct: (req, res) =>{
        const id = req.params.id
        getDetailProduct(id)
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