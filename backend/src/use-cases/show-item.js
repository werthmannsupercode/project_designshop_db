const { ItemsDAO } = require("../db-access");

function showItems() {
    return ItemsDAO
        .getAllItems()
}

module.exports = {
    showItems
}