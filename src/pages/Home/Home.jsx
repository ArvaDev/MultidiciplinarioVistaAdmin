import './Home.css'
// import ProductCard from '../../components/UI/productCard/ProductCard'
import CardProduct from '../../components/UI/CardProduct/CardProduct'
import Header from '../../components/UI/header/Header'
import TitleLabel from '../../components/UI/titleLabel/TitleLabel'
import Footer from '../../components/UI/footer/Footer'
import { dataApi } from '../../utils/api/dataApi'
export default function Home() {
    return (
        <div className='HomeClass'>
            <Header />
            <TitleLabel title="Productos publicados" />
            <div className='ProductosContainer'>
                    {dataApi.map(ob => (
                        <CardProduct name={ob.nombre} image={ob.imagen} />
                    ))}
            </div>
            <Footer />
        </div>
    );
}