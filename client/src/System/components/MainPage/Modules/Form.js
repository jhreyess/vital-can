import '../../../styles/Form.css';

const Form = (props) => {
    const inner = props.inner ? 'inner' : '';
    return(
        <div className={`form ${inner}`}>
            <form>{props.children}</form>
        </div>
    )
}

export default Form;