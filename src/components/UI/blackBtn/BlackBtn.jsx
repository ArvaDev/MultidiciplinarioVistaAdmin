import './BlackBtn.css'
export default function BlackBtn({message, width, customClass, onClick, type, to, margin}) {
    return (
        <button className={ `${customClass} ${margin}` } style={{width: width}} onClick={onClick} type={type}>
            <a href={to} className='BlackBtnText'>{message}</a>
        </button>
    );
}