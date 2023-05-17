const asyncHanlder = require('express-async-handler')
const transactionsModel = require('../models/transactionModel')


const getTransactions = asyncHanlder(async (req, res) => {
    const transactions = await transactionsModel.find()
    res.status(201).json(transactions)
})

const createTransaction = asyncHanlder(async (req, res) => {
    const { name, description, price, timestamp } = req.body
    if (!name || !price) {
        res.status(401)
        throw new Error("Fields are missing")
    }
    const newTransaction = await transactionsModel.create({ name, description, price, timestamp })
    res.status(201).json(newTransaction)
})

const updateTransaction = asyncHanlder(async (req, res) => {
    const updatedItem = await Todos.findByIdAndUpdate(req.params.id,req.body,{new:true})    
    res.status(200).json(updatedItem)
})



module.exports = { getTransactions,createTransaction,updateTransaction }
