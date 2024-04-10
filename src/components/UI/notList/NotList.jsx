import './NotList.css'
export default function NotList({producto, presentacion, cantidad, precio}) {
    return (
        <div className='NotListClass'>
            <p>{producto}</p>
            <p>{presentacion}</p>
            <p>{cantidad}</p>
            <p>${precio} cu</p>
        </div>
    );
}