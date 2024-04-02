import Lupa from '../../components/Animations/lupa/Lupa';
import './NoFound.css'
export default function NoFound() {
    return (
        <div className="NoF">
            <h1>404</h1>
            <p>Lo sentimos no hemos encontrado la pagina</p>
            <p>Porfavor verifique su busqueda</p>
            <div className='Draw'>
                <Lupa/>
            </div>
        </div>
    );
}