import "./style.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
            <li><a className="navbar__link__items" href="/">Home</a></li>
                <li><a className="navbar__link__items" href="/Works">My works</a></li>
                <li><a className="navbar__link__items" href="/Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;