import './textfield.css'
function TextField({type, message, customClass}) {
    return (
        <div className={`TextFieldClass ${customClass}`}>
            <label>{message}</label>
            <input type={type}></input>
        </div>
    );
}



export default TextField;