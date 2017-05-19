const express = require('express')
const multer = require('multer')
const upload = multer()

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'FCC File Metadata'
  })
})

app.post('/file-size', upload.single('userFile'), (req, res) => {
  res.json({
    size: req.file.size
  })
})

app.listen(port, () => {
  console.log(`server is listeniing on port ${port}`)
})
