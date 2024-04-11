import './BlackBtn.css'
export default function BlackBtn({message, width, customClass, onClick, onBlur, to, margin}) {
    return (
        <button className={ `${customClass} ${margin}` } style={{width: width}} onClick={onClick} onBlur={onBlur}>
            <a href={to} className='BlackBtnText'>{message}</a>
        </button>
    );
}