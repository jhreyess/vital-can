import '../../styles/RightSidebar.css';

const RightSidebar = (props) => {
    return(
        <div className="rightSidebar">
            {props.children}
        </div>
    )
}

export default RightSidebar;