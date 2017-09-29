const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer()

app.use(express.static('public'))

app.post('/', upload.single('file'), (req, res) => res.send({ size: req.file.size }))

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
