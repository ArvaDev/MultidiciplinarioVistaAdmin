import './Socios.css'
import Header from '../../components/UI/header/Header'
import TitleLabel from '../../components/UI/titleLabel/TitleLabel'
import SocioCards from '../../components/UI/sociosCard/SocioCards'
import Footer from '../../components/UI/footer/Footer'
import { useState, useEffect } from 'react'
import { getSocios } from '../../Service/Socios'

export default function Socios() {

    const [socios, setSocios] = useState([]);

    useEffect(() => {
        const fetchSocios = async () => {
            try {
              
                setSocios(await getSocios());

            } catch (error) {
                console.log(error);
            }
        }
        fetchSocios();
    }, []);


    return (
        <>
            <Header />
            <TitleLabel title="Socios" subtitle="Dedicación, Experiencia y pasión" />
            <div className='SociosContainer'>
                <div className='ContainerObjects customWithContainer'>
                    {
                        socios.map((socio) => (
                            <SocioCards
                                key={socio.id}
                                name={socio.username}
                                tel={socio.telefono}
                                mail={socio.email}
                                perfil={socio.img}
                            />
                        ))
                    }

                </div>
            </div>
            <Footer />
        </>
    );
}

