import '../../../styles/Form.css';

const Form = (props) => {
    const inner = props.inner ? 'inner' : '';
    const isMain = props.isMain ? 'is-main' : '';
    const grow = props.grow ? 'form-grow' : '';
    return(
        <div className={`form ${inner}${isMain}${grow}`}>
            <form>{props.children}</form>
        </div>
    )
}

export default Form;