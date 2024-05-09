const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const products = require('./products.json')

let nextProductId = 1;
function generateProductCode() {
    const productId = `P${nextProductId.toString().padStart(3, '0')}`;
    nextProductId++;
    return productId;
}

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// app.get("/", (req, res) => {
//     res.send("Hello! Node.js");
// });

app.get("/", (req, res) => {
    res.json(products)
})

app.get("/products/:code", (req, res) => {
    res.json(products.find(product => product.products === Number(req.params.products)))
})

app.post('/products', (req, res) => {
    products.push(req.body)
    let json = req.body
    res.send(`Add new product 'P${json.product_name}'compleated.`)
})

app.put('/products/:code', (req, res) => {
    const updateProduct = products.findIndex(product => product.code === Number(req.params.code))
    res.send(`Update product code: 'P${products[updateProduct].code}'compleated.`)
})

app.delete('/products/:code', (req, res) => {
    const deleteProduct = products.findIndex(product => product.code === Number(req.params.code))
    res.send(`Delete product: 'P${products[deleteProduct].product_name}'compleated.`)
})

app.listen(port, () => {
    console.log("Starting node.js at port" + port)
});

console.log()