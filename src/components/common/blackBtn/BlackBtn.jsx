import './BlackBtn.css'
function BlackBtn({message, width}) {
    return (
        <button style={{width: width}}>{message}</button>
    );
}

export default BlackBtn;