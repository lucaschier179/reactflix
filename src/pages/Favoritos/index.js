import { useEffect, useState } from 'react';
//import './favoritos.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@ReactFlix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@ReactFlix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className='meus-filmes'>
            <p className='titulo-pagina'>Meus filmes</p>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo...</span>}
                {filmes.map((item) => {
                    return(
                        <strong className='container-meus-filmes' key={item.id}>
                            <span >{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button className='botao-excluir' onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </strong>
                    )
                })}
        </div>
    )
}

export default Favoritos;