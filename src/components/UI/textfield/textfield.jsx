import './textfield.css'
function TextField({type, message, customClass, onblur, onchange, onFocus, required, value}) {
    return (
        <div className={`TextFieldClass ${customClass}`}>
            <label>{message}</label>
            <input type={type} onBlur={onblur} onChange={onchange} onFocus={onFocus} required={required} placeholder={value}></input>
        </div>
    );
}



export default TextField;