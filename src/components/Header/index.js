import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='cabecalho'>
            <Link className='logo-header' to='/'>Re@ctFlix</Link>
            <Link className='botao-header' to='/favoritos'>Meus filmes</Link>
            <Link className='botao-header' to='/top20filmes'>Top 20 Filmes</Link>
        </header>
    )
}

export default Header;