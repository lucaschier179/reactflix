//import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='w-full h-16 bg-[#FFFC00] flex items-center justify-around'>
            <Link className='text-4xl font-bold' to='/'>ReactFlix</Link>
            <Link className='botao' to='/favoritos'>Meus filmes</Link>
            <Link className='botao' to='/top20filmes'>Top 20 Filmes</Link>
        </header>
    )
}

export default Header;