import './Home.css'

import CardProduct from '../../components/UI/CardProduct/CardProduct'
import Header from '../../components/UI/header/Header'
import TitleLabel from '../../components/UI/titleLabel/TitleLabel'
import Footer from '../../components/UI/footer/Footer'
import { getProducts} from '../../Service/Products'
import { useState, useEffect } from 'react'

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
            const fetchProducts = async ()=>{
                try {
                    const productsData = await getProducts();
                    setProducts(productsData);
                } catch (error) {
                    console.log(error); 
                }
            }
            fetchProducts();
    },[])


    return (
        <div className='HomeClass'>
            <Header />
            <TitleLabel title="Productos publicados" />
        
            <div className='ProductosContainer'>
                    {products.map(product => (
                        <CardProduct key={product._id} 
                                    name={product.name}
                                    image={product.imgUrl}
                                    idProduct={product._id} />
                    ))}
            </div>
            <Footer />
        </div>
    );
}