const express = require("express")
const { addItem } = require("../use-cases/add-item")
const { removeItem } = require("../use-cases/remove-item")
const { showItems } = require("../use-cases/show-item")

const itemsRouter = express.Router()

itemsRouter.get("/allitems", (_, res) => {
    showItems()
        .then(items => res.json(items))
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Failed to load items from database." })
        })
})

itemsRouter.post("/addnewitemtoshop", (req, res) => {
    if (!req.body) {
        res.status(400).json({ error: "Please include a item." })
        return;
    }

    const newItem = {
        ProductName: req.body.productname,
        Company: req.body.company,
        Price: "$" + req.body.price,
        ProductLink: req.body.productlink,
        LinkShop: req.body.linkshop
    }

    addItem(newItem)
        .then(addedItem => res.status(201).json(addedItem))
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Failed to add item to database." })
        })
})


itemsRouter.delete("/deleteitems/:id", (req, res) => {
    const itemId = req.params.id
    removeItem({ itemId })
        .then(removedItem => res.json({ removedItem }))
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Failed to remove item." })
        })
})

module.exports = {
    itemsRouter
}