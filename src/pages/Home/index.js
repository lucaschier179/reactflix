import { useEffect, useState } from 'react';
import api from '../../services/api';

// URL DA API = movie/now_playing?api_key=710272209fd57c108bd36dbb4f6000c2&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "710272209fd57c108bd36dbb4f6000c2",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results);
        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>Bem Vindo a Home</h1>
        </div>
    )
}

export default Home;