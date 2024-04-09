import './Home.css'
import ProductCard from '../../components/UI/productCard/ProductCard'
import HomeHeader from '../../components/UI/homeHeader/HomeHeader';
import { dataApi } from '../../utils/api/dataApi'

export default function Home() {
    return (
        <div className='HomeClass'>
            <HomeHeader/>
            <div className='ProductContainer'>
                {dataApi.map(ob => (
                    <ProductCard name={ob.nombre} image={ob.imagen}/>
                ))}
            </div>
        </div>
    );
}