var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/login', (req,res)=>{
  let username = req.body.username
  let rold = req.body.rold
  let payload = {
    username: username,
    rold: rold
  }
  let token = jwt.sign(payload, process.env.secret_key )
  res.send({
    token
  })
})
let checkToken = (req,res,next) =>{
  try {
    let token = req.headers.authorization.split('Bearer ')[1]
    let detoken = jwt.verify(token, process.env.secret_key)
    req.detoken = detoken
    next()
  } catch (err) {
    res.status(401).send({
      message: err.message
    })
  }
}

router.get('/hello', checkToken, (req,res)=>{
  res.send({
    message: `hello ${req.detoken.rold} ${req.detoken.username}`
  })
})


module.exports = router;