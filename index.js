const express = require('express')
const app = express()
const port = 5000

const items = require('./router/route');
const count = require('./router/items');

app.use('/api',items);
app.use('/item',count);

app.listen(port, () => {
  console.log(`VILLEN listening on port ${port}`)
})