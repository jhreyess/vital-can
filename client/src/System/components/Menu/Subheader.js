import '../../styles/Subheader.css';

const Header = (props) => {
    return(
        <nav className="subheader">
                {props.title}
        </nav>
    )
}

export default Header;