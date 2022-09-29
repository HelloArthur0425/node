const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello World!123'
    })
});

app.listen(3002);