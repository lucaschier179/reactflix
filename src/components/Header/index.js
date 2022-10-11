import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>ReactFlix</Link>
            <body>
            <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
            <Link className='top20Filmes' to='/top20filmes'>Top 20 Filmes</Link>
            </body>
        </header>
    )
}

export default Header;