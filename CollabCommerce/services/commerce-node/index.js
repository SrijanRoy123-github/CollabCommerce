
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (_,res)=> res.json({ ok:true }))
app.get('/products', (_,res)=> res.json(require('../../public/data/products.json')))

app.listen(4000, ()=> console.log('Commerce service on 4000 (skeleton)'))
