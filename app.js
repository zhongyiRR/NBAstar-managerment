//1.导入模块
const express = require('express')
const expressTmp = require('express-art-template')
const cookieSession = require('cookie-session')
const router = require('./router.js')
//2.创建服务器
let app = express()

//配置art-template
app.set('view engine', 'html')
app.engine('html', expressTmp)

//配置静态资源
app.use('/node_modules', express.static('node_modules'))
app.use('/views', express.static('views'))

// 配置 cookie-session'
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))
//3.开启服务器
app.use(router)

app.listen(3000,()=>{
console.log('success')
})