const express = require('express')
const app = express()
const port = 5000
app.use(express.json());

const items = require('./router/route');

app.use('/api',items);

app.listen(port, () => {
  console.log(`VILLEN listening on port ${port}`)
})