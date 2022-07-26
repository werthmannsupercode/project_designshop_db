import { Link } from 'react-router-dom';

const Footer = () => {
    return (<footer>
        <article>
            <section>
                <a href="#">The Design Shop</a>
                <p>Carefully curated online design store, founded and designed by Ruby Bacanovic</p>
            </section>
            <section>
                <a href="#">Contact</a>
                <a href="#">Email us</a>
                <a href="#">Work with us</a>
            </section>
            <section>
                <a href="#">Shopowners Dashboard</a>
                <p>click here to <Link to="/addNewItem" >admins area</Link>
                </p>
                <p>Don't worry, everyone can be admin.</p>
            </section>
            <section>
                <a href="#">Find Us Here</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </section>
        </article>
        <span>© 2019 The Design Shop &#9679; The Design Blog</span>
    </footer>)
}

export default Footer;