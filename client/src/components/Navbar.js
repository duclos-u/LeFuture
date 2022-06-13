import './styles.sass';

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`default-navbar-item ${classProps}`}>
            {title}
        </li>
    )
}

const ItemList = ['Market', 'Exchange', 'Test', 'Wallets']

const Navbar = () => {
    return (
        <nav className="top-navbar">
            <div>
                [logo]
            </div>
            <ul>
                {ItemList.map((item, i) => (
                    <NavbarItem key={item + i} title={item} />
                ))}
            </ul>
        </nav>);
}
export default Navbar;
