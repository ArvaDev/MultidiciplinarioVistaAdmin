import './ProductCard.css'

export default function ProductCard({image, name}) {
    return (
        <div className="ProductCardClass">
            <div className='ContainerImg'>
                <img src={image}></img>
            </div>
            <p>{name}</p>
            <div className='buttons'>
                <button className='DeleteBtn'>Eliminar</button>
                <button className='UpdateBtn'>Actualizar</button>
            </div>
        </div>
    );
}