import { Link } from 'react-router-dom';

const OneItem = (props) => {
    return (<li>
        <a href={props.LinkShop}>
            <img src={props.ProductLink} alt="" />
        </a>
        <div>
            <h2>{props.ProductName}</h2>
            <h2>{props.Price}</h2>
            <p>{props.Company}</p>
            <Link to={`/item/${props.id}`}>Show Details</Link>
        </div>


    </li>);
}

export default OneItem;