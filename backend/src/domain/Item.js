function makeItem({
    _id,
    ProductName,
    Company,
    Price,
    ProductLink,
    LinkShop,
}) {

    if (typeof ProductName !== "string" || ProductName.length < 1) {
        throw new Error("ProductName must have at least one character.")
    }

    if (typeof Company !== "string" || Company.length < 1) {
        throw new Error("Company must have at least one character.")
    }

    if (typeof Price !== "number") {
        throw new Error("Price must be a number.")
    }

    if (typeof ProductLink !== "string" || ProductLink.length < 1) {
        throw new Error("ProductLink must have at least one character.")
    }

    if (typeof LinkShop !== "string" || LinkShop.length < 1) {
        throw new Error("LinkShop must have at least one character.")
    }

    return {
        _id,
        ProductName,
        Company,
        Price,
        ProductLink,
        LinkShop,
    }
}

module.exports = {
    makeItem
}
