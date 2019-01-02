/**
 * 代理
 *
 * @author: Storm
 * @date: 2018/09/17
 */

const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/')))

// app.use('/api', proxy({
//   target: 'http://test.zhiqicloud.com:8799/',
//   changeOrigin: true,
//   ws: true
// }))
const port = 8083

app.listen(port)

console.log(`Server: listening on port ${port}`)

