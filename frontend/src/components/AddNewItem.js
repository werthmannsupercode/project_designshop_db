import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState, useEffect } from "react";
import OneItemDashboard from "./OneItemDashboard"

const AddNewItem = () => {


    const [productname, setProductname] = useState("")
    const [company, setCompany] = useState("")
    const [price, setPrice] = useState("")
    const [productlink, setProductlink] = useState("")
    const [linkshop, setLinkshop] = useState("")
    const [allItems, setAllItems] = useState([])

    const addItem = () => {

        fetch("http://localhost:9000/items/addnewitemtoshop", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productname,
                company,
                price,
                productlink,
                linkshop
            })
        })
            .then(res => res.json(), window.location.reload(false)
            )
    }


    useEffect(() => {
        fetch("http://localhost:9000/items/allitems")
            .then(response => response.json())
            .then(itemsArray => setAllItems(itemsArray))
    }, [])


    return (<div>
        <Navbar />
        <h1>Add New Item to Shop</h1>
        <form>
            <div>
                <label htmlFor="productname">ProductName:</label>
                <input type="text" name="productname" id="productname" placeholder="ProductName" value={productname} onChange={(e) => setProductname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input type="text" name="company" id="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" id="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="productlink">ProductLink:</label>
                <input type="text" name="productlink" id="productlink" placeholder="ProductLink" value={productlink} onChange={(e) => setProductlink(e.target.value)} />
            </div>
            <div>
                <label htmlFor="linkshop">LinkShop:</label>
                <input type="text" name="linkshop" id="linkshop" placeholder="LinkShop" value={linkshop} onChange={(e) => setLinkshop(e.target.value)} />
            </div>
            <button onClick={addItem}>Add Item to Shop</button>
        </form>
        <section>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ProductName</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th className="productLinkTable">ProductLink</th>
                        <th className="linkShopTable">LinkShop</th>
                    </tr>
                </thead>
                {allItems.map((item) => {
                    return (
                        <OneItemDashboard
                            key={item._id}
                            id={item._id}
                            ProductName={item.ProductName}
                            Company={item.Company}
                            Price={item.Price}
                            ProductLink={item.ProductLink}
                            LinkShop={item.LinkShop}
                        />
                    )
                })}

            </table>
        </section>
        <Footer />
    </div>);
}

export default AddNewItem;