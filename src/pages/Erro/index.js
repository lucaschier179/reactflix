import { Link } from "react-router-dom"

function Erro(){
    return(
        <div className="erro-titulo">
            <h1 className="text-9xl"> ERRO 404</h1>
            <h2 className="text-2xl">Página não encontrada!</h2>
            <Link className="botao-home" to='/'>Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;