const express = require('express')
const router = express.Router('router')
const productModel = require('../models/product')

router.post('/product', async (req, res) =>{
    try {
        let body = req.body

        let new_product = new productModel({
            product_name: body.product_name,
            price: body.price,
            amount: body.amount,
            detail: body.detail
        })

let product = await new new_product.save()

return res.status(201).send({
    data: product,
    message: "create success"
})


    }catch(err) {
        return res.status(err.status || 500).send({
            message: err.message
        })
    }
})


router.get('/', async (req, res) =>{
    try {
        let products = await productModel.find()

        return res.send({
            data: products,
            message: "get success"
        })

    }catch(err) {
        return res.status(err.status || 500).send({
            message: err.message
        })
    }
})

router.get('/:id', async (req, res) =>{
    try {
        let id = req.params.id
        let products = await productModel.findById(id)

        return res.send({
            data: products,
            message: "get success"
        })

    }catch(err) {
        return res.status(err.status || 500).send({
            message: err.message
        })
    }
})


router.put('/', async (req, res)=>{
    try {
        let id = req.params.id
        let body = req.body

        await productModel.updateOne(
            {_id: id},
            {
                $set: {
                    product_name: body.product_name,
                    price: body.price,
                    amount: body.amount,
                    detail: body.detail
                }
            }
        )
let product = await productModel.findById(id)
return res.send({
    data: product,
    message:"update success"
})

}catch(err) {
        return res.status(err.status || 500).send({
            message: err.message
        })
    }
})

router.delete('/', async (req, res) =>{
    try {
        let id = req.params.id
        await productModel.deleteOne({_id: id})

        let product = await productModel.find()
        return res.send({
            data: product,
            message: "deleat success"
        })
    }catch(err) {
        return res.status(err.status || 500).send({
            message: err.message
        })
    }
})
module.exports = router