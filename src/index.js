const express = require('express')
const app = express()
const index = require('./templates/index.njk')
const port = process.env.PORT || 3000

app.use('/assets', express.static('dist/assets'))

app.get('/', function (req, res) {
  res.send(index.render({ name: req.query.name }))
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
