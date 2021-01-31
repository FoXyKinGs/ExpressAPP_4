const { promise } = require('express')
const conn = require('../config/config')

module.exports = {
    modelAllProductForRedis: () =>{
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT product.id, product.id_category, product.product_name, product.image, product.price, category.category_name FROM product LEFT JOIN category ON product.id_category = category.id`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelAllProduct: (name, order, by, offset, limit) =>{
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT product.id, product.id_category, product.product_name, product.image, product.price, category.category_name FROM product LEFT JOIN category ON product.id_category = category.id WHERE product_name LIKE '%${name}%' ORDER BY ${order} ${by} LIMIT ${offset}, ${limit}`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelInsertProduct: (data) =>{
        return new Promise((resolve, reject)=>{
            conn.query(`INSERT INTO product (id_category, product_name, image, price) VALUES ('${data.id_category}', '${data.product_name}', '${data.image}', '${data.price}')`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelUpdateProduct: (data, id) =>{
        return new Promise((resolve, reject)=>{
            conn.query(`UPDATE product SET id_category='${data.id_category}', product_name='${data.product_name}', image='${data.image}', price='${data.price}' WHERE id='${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelDeleteProduct: (id) =>{
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM product WHERE id='${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelTotalProduct: () =>{
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT COUNT (*) AS total FROM product`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },
    getDetailProduct: (id) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT product.id, product.id_category, product.product_name, product.image, product.price, category.category_name FROM product LEFT JOIN category ON product.id_category = category.id WHERE product.id = '${id}'`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    }
}