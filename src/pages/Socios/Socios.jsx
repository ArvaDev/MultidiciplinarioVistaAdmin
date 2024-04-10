import './Socios.css'
import Header from '../../components/UI/header/Header'
import TitleLabel from '../../components/UI/titleLabel/TitleLabel'
import SocioCards from '../../components/UI/sociosCard/SocioCards'
import RegistroSocios from '../../components/UI/registroSocios/RegistroSocios'
import Footer from '../../components/UI/footer/Footer'
import { UsersApi } from '../../utils/api/UsersApi'
export default function Socios() {
    return (
        <>
            <Header />
            <TitleLabel title="Socios" subtitle="Dedicación, Experiencia y pasión" />
            <div className='TotalContainer'>
                <div className='ContainerObjects'>
                    {UsersApi.map(ob => (
                        <SocioCards name={ob.name} tel={ob.tel} mail={ob.mail} user={ob.user} />
                    ))}
                </div>
            </div>
            <RegistroSocios/>
            <Footer/>
        </>
    );
}