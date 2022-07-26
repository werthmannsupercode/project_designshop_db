const { ItemsDAO } = require("../db-access");
const { makeItem } = require("../domain/Item");

function addItem(item) {

    return ItemsDAO.addItemToDB(item)
}

module.exports = {
    addItem
}