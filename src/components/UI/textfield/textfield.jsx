import './textfield.css'
function TextField({type, message, customClass, oblur, onchange}) {
    return (
        <div className={`TextFieldClass ${customClass}`}>
            <label>{message}</label>
            <input type={type} onBlur={oblur} onChange={onchange}></input>
        </div>
    );
}



export default TextField;