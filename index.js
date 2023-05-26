const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({foo: 'bar'})
})

const PORT = process.env.PORT || 3000
app.listen(3000);
