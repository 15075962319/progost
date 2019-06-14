var express = require("express")
var app = express()
var path = require("path")

console.log(__dirname)
// // 服务端访问静态资源 目录
// app.use(express.static("./static"))
// http://localhost:3000/register.html
app.use(express.static(path.join(__dirname,"./static")))
app.listen(3000,()=>{
    console.log("端口已经挂载！！")
    // 304
})
