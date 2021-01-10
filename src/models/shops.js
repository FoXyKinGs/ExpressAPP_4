const { promise } = require('../config/config')
const conn = require('../config/config')

module.exports = {
    modelAllProduct: () => {
        return new Promise((resolve,reject)=>{
            conn.query(`SELECT * FROM product LEFT JOIN category ON product.id_category = category.id LIMIT 0, 6`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelAllCategory: () =>{
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM category LIMIT 0, 6`, (err, result) => {
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
            conn.query(`SELECT * FROM history LIMIT 0, 6`, (err, result) => {
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
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

    modelSearchProduct: (name) =>{
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT product.product_name, product.image, product.price, category.category_name FROM product LEFT JOIN category ON product.id_category = category.id WHERE product_name LIKE '%${name}%' LIMIT 0, 6`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    },

    modelSortingProduct: (name, by)=>{
        return new Promise((resolve, reject)=>{
            conn.query(`SELECT product.product_name, product.image, product.price, category.category_name FROM product LEFT JOIN category ON product.id_category = category.id ORDER BY ${name} ${by} LIMIT 0, 6`, (err, result)=>{
                if(err){
                    reject(new Error("Failed to indication, something wrong happened"))
                }else{
                    resolve(result)
                }
            })
        })
    }
}