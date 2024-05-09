const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json()); // Middleware สำหรับ parse JSON body


// ข้อมูลสินค้า (ในรูปแบบของอาร์เรย์)
let products = [];

fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        products = JSON.parse(data); // แปลงข้อมูล JSON เป็น object array
    } catch (error) {
        console.error('Error parsing JSON data:', error);
    }
});


app.get('/products', (req, res) => {
    res.json(products);
});


app.get('/products/:code', (req, res) => {
    const { code } = req.params;
    const product = products.find(product => product.code === code);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});


app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});


app.put('/products/:code', (req, res) => {
    const { code } = req.params;
    const updatedProduct = req.body;
    const index = products.findIndex(product => product.code === code);
    if (index !== -1) {
        products[index] = updatedProduct;
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});


app.delete('/products/:code', (req, res) => {
    const { code } = req.params;
    const index = products.findIndex(product => product.code === code);
    if (index !== -1) {
        products.splice(index, 1);
        res.json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});


// เริ่มต้นเซิร์ฟเวอร์ Express
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
