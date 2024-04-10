import './BlackBtn.css'
export default function BlackBtn({message, width, customClass, onClick, onBlur}) {
    return (
        <button className={customClass} style={{width: width}} onClick={onClick} onBlur={onBlur}>{message}</button>
    );
}