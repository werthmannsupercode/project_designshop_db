const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

function getAllItems() {
    return getDB()
        .then(db => db.collection("designshopCollection").find().toArray())
}

function getItemById(id) {
    return getDB().then(db => db.collection("designshopCollection").findOne({ _id: ObjectId(id) }))
}

function addItemToDB(item) {
    return new Promise((resolve, reject) => {
        getDB()
            .then(db => db.collection("designshopCollection").insertOne(item))
            .then(result => {
                if (result.acknowledged === true && result.insertedId) {
                    return resolve({
                        _id: result.insertedId,
                        ...item,
                    })
                } else {
                    return reject(result)
                }
            }).catch((err) => reject(err))
    })
}

function removeItem(itemId) {
    return new Promise((resolve, reject) => {
        getDB()
            .then(db => db.collection("designshopCollection").findOneAndDelete({ _id: ObjectId(itemId) }))
            .then(result => {
                if (result.ok === 1) resolve(result.value)
                else reject({ msg: "Error deleting item." })
            })
            .catch((err) => reject(err))
    })
}

function getItemById(id) {
    return getDB().then(db => db.collection("designshopCollection").findOne({ _id: ObjectId(id) }))
}

module.exports = {
    getAllItems,
    removeItem,
    addItemToDB,
    getItemById
}