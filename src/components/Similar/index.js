import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

function Similar(){
    const { id } = useParams();
    const navigation = useNavigate();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function similarFilmes(){
            const response = await api.get(`/movie/${id}/similar`, {
                params:{
                    api_key: "710272209fd57c108bd36dbb4f6000c2",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }

        similarFilmes();
    }, [navigation, id])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
            <div className='lista-filmes'>
            <p className='titulo-recomendacao'>Recomendações</p>
                {filmes.map((filme) => {
                    return(
                        <article  className='container-filme-recomendacao' key={filme.id}>
                            <strong className='titulo-filme-recomendacao'>{filme.title} - {filme.release_date.split('-').reverse().join('/')}</strong>
                            <img className='poster-filme-recomendacao' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link className='botao-recomendacao' to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
    )
}

export default Similar;