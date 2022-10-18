import axios from "axios";

// URL DA API = movie/now_playing?api_key=710272209fd57c108bd36dbb4f6000c2&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;