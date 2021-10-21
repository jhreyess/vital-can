import '../../../styles/Form.css';

const Form = (props) => {
    const inner = props.inner ? 'inner' : '';
    const isMain = props.isMain ? 'is-main' : '';
    return(
        <div className={`form ${inner}${isMain}`}>
            <form>{props.children}</form>
        </div>
    )
}

export default Form;