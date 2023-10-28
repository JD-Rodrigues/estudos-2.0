const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("<h1>Página Inicial</h1>")
})

app.get('/sobre', (req, res)=>{
    res.send("<h1>Sobre nós</h1>")
})

app.listen(8001)