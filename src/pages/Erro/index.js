import { Link } from "react-router-dom"
import './erro.css'

function Erro(){
    return(
        <div className="p-40 justify-center text-center text-lg text-white ">
            <h1 className="text-9xl"> ERRO 404</h1>
            <h2>Página não encontrada!</h2>
            <Link to='/'>Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;