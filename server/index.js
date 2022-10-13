const express = require('express')
const cors = require('cors')

const app = express()
const router = require('./router')

app.use(cors())
app.use("/api", router)

app.listen(5566, () => {
  console.log("服务器运行在5566端口号")
})
