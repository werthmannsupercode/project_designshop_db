import { useState, useEffect } from "react";
import OneItem from "./OneItem";

const AllItemsList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/items/allitems")
            .then(response => response.json())
            .then(itemsArray => setItems(itemsArray))
    }, [])

    return (<ul className="shoplist">
        {items.map((oneitem) => {
            return (
                <OneItem
                    key={oneitem._id}
                    ProductName={oneitem.ProductName}
                    Company={oneitem.Company}
                    Price={oneitem.Price}
                    ProductLink={oneitem.ProductLink}
                    LinkShop={oneitem.LinkShop}
                />
            )
        })}

    </ul>);
}

export default AllItemsList;