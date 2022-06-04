const express = require('express')

const app = express();

app.get('/hello', (req, res) => {
    return res.json({ message: 'hello world' })
})

app.listen(3000, () => {
    console.info('Server started on port 3000')
})