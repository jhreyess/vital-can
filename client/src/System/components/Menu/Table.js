import '../../styles/Table.css';

const Table = (props) => {
    const adjusted = props.adjusted ? 'adjusted' : ''
    return(
        <table className={`table ${adjusted}`}>
            {props.children}
        </table>
    )
}

export default Table;