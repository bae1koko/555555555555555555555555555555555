//ตัวอย่างของที่พี่สอน
router.post('/', function(req, res, next) {
    try {
      let body = req.body
      console.log(body)
      if(body.product_name === "") {
        throw {message: "กรุณาใส่ชื่อ นะ" , status: 400}
      }
      return res.status(201).send({
        data: body,
        message: "create success"
      })
    } catch (err) {
      return res.status(err.status || 500).send({
        message: err.message
      })
    }
  });