const OneItemDashboard = (props) => {

    const id = props.id

    const deleteItem = (id) => {

        fetch("http://localhost:9000/items/deleteitems/" + id, {
            method: "delete"
        })
            .then(() => console.log('Delete successful'),
                window.location.reload(false));
    }
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.ProductName}</td>
                <td>{props.Company}</td>
                <td>{props.Price}</td>
                <td className="productLinkTable">{props.ProductLink}</td>
                <td className="linkShopTable">{props.LinkShop}</td>
                <td>
                    <button onClick={() => deleteItem(id)}>Delete</button>
                </td>
            </tr>
        </tbody>
    );
}

export default OneItemDashboard;