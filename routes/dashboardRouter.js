const router = require('express').Router()
const control = require('../controller/transactionController')

router.get("/",control.getTransactions)

router.post("/",control.createTransaction)

router.put("/",control.updateTransaction)
 
module.exports = router 