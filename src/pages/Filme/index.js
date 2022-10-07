import { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './filme-info.css';
import api from '../../services/api';

function Filme(){
    const { id } = useParams();
    const navigation = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "710272209fd57c108bd36dbb4f6000c2",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("FILME NÃO ENCONTRADO!");
                navigation("/", { replace: true });
                return;
            })
        }
        loadFilme();

    return () => {
        console.log("DESMONTADO")
    }
        
    }, [navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@ReactFlix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)
        if(hasFilme){
            alert("ESSE FILME JÁ FOI ADICIONADO EM MEUS FILMES");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@ReactFlix", JSON.stringify(filmesSalvos));
        alert("FILME SALVO COM SUCESSO")
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Lançamento: {filme.release_date.split('-').reverse().join('/')}</strong>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className='area-buttons'>
                <button onClick={salvarFilme}>Adicionar à Meus Filmes</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;