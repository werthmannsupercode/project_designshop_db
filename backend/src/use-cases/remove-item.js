const { ItemsDAO } = require("../db-access");

function removeItem({ itemId }) {
    return ItemsDAO.removeItem(itemId)
}

module.exports = {
    removeItem
}