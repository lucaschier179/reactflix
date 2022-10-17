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
            setFilmes(response.data.results.slice(0,20))
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
        <div className='container'>
            <div className='lista-filmes'>
            <p>Recomendações:</p>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title} - {filme.release_date.split('-').reverse().join('/')}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Similar;