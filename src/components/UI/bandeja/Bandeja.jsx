import './Bandeja.css'
import NotList from '../notList/NotList';
export default function Bandeja({state, products}) {
    let s = state ? "auto" : "0"
    console.log(products);
    return (
        <div className='BandejaClass' style={{height: s}}>
            <div className='ListHeader'>
                <p>producto</p>
                <p>presentacion</p>
                <p>cantidad</p>
                <p>precio</p>
            </div>
            {products.map(o => (
                <NotList producto={o.nombre} presentacion={o.precentacion} cantidad={o.cantidad} precio={o.precio}/>
            ))}
        </div>
    );
}