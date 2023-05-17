const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDb=require('./config/dbConnection')

connectDb()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/dashboard",require('./routes/dashboardRouter'))

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT} on ${now = new Date()}`))

 