import Navbar from "./Navbar"
import Footer from "./Footer"
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
// import { Link } from 'react-router-dom';

const ItemDetail = () => {

    // const { id } = useParams()
    // const [item, setItem] = useState()

    // useEffect(() => {
    //     fetch("http://localhost:9000/item/" + id)
    //         .then(response => response.json())
    //         .then(itemObject => setItem(itemObject))
    // }, [id])


    // if (item) return (<div>

    //     <img src={item.ProductLink} alt="Produktbild" />
    //     <div>
    //         <h2>{item.ProductName}</h2>
    //         <h2>{item.Price}</h2>
    //         <p>{item.Company}</p>
    //     </div>

    //     <Link to="/">zurück zu Home</Link>
    //     <Footer />
    // </div>);
    // else 
    return (
        <div>
            <Navbar />
            <h1>loading...</h1>
            <Footer />
        </div>
    )
}

export default ItemDetail;