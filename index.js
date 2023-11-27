require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Routes/Routes')
const server=express()
server.use(cors())
server.use(express.json())
server.use(router)
 require('./Connections/Connection')


const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`EMS server started at port${port}-----`);
})