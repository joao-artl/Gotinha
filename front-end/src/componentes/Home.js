import './style.css';
import Header from './Cabecalho.js';
import LogoUnB from '../img/unb.png'

function Home() {
    return (
        <div className="header">
            <div className="logo">
                <img src={LogoGO} alt="Minha Imagem" className="logoGO" />
            </div>
            <div className="navegacaoMenu">
                <a>Home</a>
                <a>Pesquisar</a>
                <a>Sobre</a>
            </div>
        </div>
    );
}

export default Home;