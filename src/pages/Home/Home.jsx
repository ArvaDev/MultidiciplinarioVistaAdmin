import './Home.css'
import ProductCard from '../../components/UI/productCard/ProductCard'
import Header from '../../components/UI/header/Header'
import TitleLabel from '../../components/UI/titleLabel/TitleLabel'
import Footer from '../../components/UI/footer/Footer'
import { dataApi } from '../../utils/api/dataApi'
export default function Home() {
    return (
        <div className='HomeClass'>
            <Header />
            <TitleLabel title="Productos publicados" />
            <div className='TotalContainer'>
                <div className='ContainerObjects'>
                    {dataApi.map(ob => (
                        <ProductCard name={ob.nombre} image={ob.imagen} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}