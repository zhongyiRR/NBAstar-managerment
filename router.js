const express = require('express')
const router = express.Router()

const process = require('./process.js')

router.get('/', (req, res) => {
    process.getIndex(req,res)
})

router.get('/add',(req,res) => {
    process.getAdd(req,res)
})

router.post('/add', (req,res) => {
    process.postAdd(req,res)
})

module.exports = router