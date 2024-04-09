import './ProductCard.css'
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
export default function ProductCard({image, name}) {
    return (
        <div className="ProductCardClass">
            <div className='ContainerImg'>
                <img src={image}></img>
            </div>
            <p>{name}</p>
            <div className='buttons'>
                <button className='DeleteBtn'><FaTrashAlt/> Elminar</button>
                <button className='UpdateBtn'>Actualizar <FaPencilAlt/></button>
            </div>
        </div>
    );
}