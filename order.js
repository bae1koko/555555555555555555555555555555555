const express = require('express');
const fs = require('fs'); // Import module fs ของ Node.js สำหรับการอ่านไฟล์

const app = express();
app.use(express.json());

let orders = [];

// API เพื่อสร้างใบสั่งซื้อใหม่
app.post('/orders', (req, res) => {
    const { buyerName, items } = req.body;
    let totalAmount = 0;

    // อ่านข้อมูลสินค้าจากไฟล์ JSON
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        try {
            const products = JSON.parse(data); // แปลงข้อมูล JSON เป็น object array

            // ตรวจสอบและคำนวณราคารวมของสินค้าที่สั่งซื้อ
            items.forEach(item => {
                const product = products.find(p => p.code === item.productCode);
                if (!product || product.quantity < item.quantity) {
                    res.status(400).json({ message: `Insufficient stock for product ${item.productCode}` });
                    return;
                }
                totalAmount += product.price * item.quantity;
            });

            // สร้างใบสั่งซื้อใหม่
            const newOrder = {
                order_id: orders.length + 1,
                buyerName,
                items,
                totalAmount
            };

            // เพิ่มใบสั่งซื้อใหม่เข้าไปในรายการ orders
            orders.push(newOrder);

            // อัปเดตจำนวนสินค้าในไฟล์ JSON หลังจากทำการสั่งซื้อ
            items.forEach(item => {
                const productIndex = products.findIndex(p => p.code === item.productCode);
                products[productIndex].quantity -= item.quantity;
            });

            // บันทึกข้อมูลสินค้าที่อัปเดตกลับไปยังไฟล์ JSON
            fs.writeFile('products.json', JSON.stringify(products, null, 2), err => {
                if (err) {
                    console.error('Error writing file:', err);
                    res.status(500).json({ message: 'Internal server error' });
                    return;
                }
                res.status(201).json(newOrder);
            });
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
});

// API เพื่อดึงข้อมูลใบสั่งซื้อทั้งหมด
app.get('/orders', (req, res) => {
    res.json(orders);
});

// API เพื่อดึงข้อมูลใบสั่งซื้อตาม order_id
app.get('/orders/:order_id', (req, res) => {
    const { order_id } = req.params;
    const order = orders.find(order => order.order_id === parseInt(order_id));
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

// เริ่มต้นเซิร์ฟเวอร์ Express
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
