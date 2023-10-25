import './header.css';
import LogoGO from '../img/goImg.png';

function Cabecalho() {
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

export default Cabecalho;