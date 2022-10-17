import { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
//import './filme-info.css';
import api from '../../services/api';
import { toast } from 'react-toastify';
import Similar from '../../components/Similar';

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

    }, [navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@ReactFlix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)
        if(hasFilme){
            toast.warn("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@ReactFlix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }

    if(loading){
        return(
            <div className='loading'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <div className='container-filme-info'>
                <h1 className='titulo-filme-info'>{filme.title}</h1>
                <img className='poster-filme-info' src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                <strong className='lancamento'>Lançamento: {filme.release_date.split('-').reverse().join('/')}</strong>
                <strong className='nota-filme'>Avaliação: {filme.vote_average} / 10</strong>
                <h3><strong>Sinopse</strong></h3>
                <span className='sinopse'>{filme.overview}</span>
                <div className='area-buttons'>
                    <button className='botao-adicionar' onClick={salvarFilme}>Adicionar à Meus Filmes</button>
                    <button className='botao-trailer'>
                        <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                            Trailer
                        </a>
                    </button>
                </div>
            </div>
            <Similar/>
        </div>
    )
}

export default Filme;