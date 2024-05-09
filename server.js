const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const users = require('./db')

var cors =require('cors') 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// app.get("/", (req, res) => {
//     res.send("Hello! Node.js");
// });

app.get("/", (req, res) => {
    res.json(users)
})

app.get("/users/:id", (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
})

app.post('/users', (req, res) => {
    users.push(req.body)
    let json = req.body
    res.send(`Add new user ''${json.username} compleated.`)
})

app.put('/users/:id', (req, res) => {
    const updateIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send(`Update user id: '${users[updateIndex].id}'compleated.`)
})

app.delete('/users/:id', (req, res) => {
    const deleteIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send(`Delete user id: '${users[deleteIndex].username}'compleated.`)
})

app.listen(port, () => {
    console.log("Starting node.js at port" + port)
});