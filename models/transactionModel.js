const mongoose = require('mongoose')
const {format:date} = require('date-fns')
const currentDate = date(new Date(), "yy/MM")
const transactions = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            default:"",
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        timestamp:{
            type:String,
            default:currentDate
        }

    }
)

module.exports = mongoose.model("transactions", transactions)