import '../../styles/Header.css';

const Header = (props) => {
    return(
        <nav className="header">
            {props.children}
        </nav>
    )
}

export default Header;