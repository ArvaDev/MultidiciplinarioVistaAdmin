import './Bandeja.css'
import NotList from '../notList/NotList';

export default function Bandeja({state, products}) {
    let s = state ? "auto" : "0"
    return (
        <div className='BandejaClass' style={{height: s}}>
            <div className='ListHeader'>
                <p>producto</p>
                <p>presentacion</p>
                <p>cantidad</p>
                <p>precio</p>
            </div>
            {products.map(producto => (
                <NotList
                    key={producto._id} 
                    producto={producto.idProduct.name} 
                    presentacion={producto.idProduct.content}
                    cantidad={producto.quantity}
                    precio={producto.total_price}
                />
            ))}
        </div>
    );
}