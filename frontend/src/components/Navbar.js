import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav>
            <Link to="/">
                <h1>THE DESIGN SHOP</h1>
            </Link>
            <div>
                <Link to="">Weekly Recommendations</Link>
                <Link to="">Contact</Link>
                <Link to="">TDB</Link>
            </div>
        </nav>
    );
}

export default Navbar;