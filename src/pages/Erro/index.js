import { Link } from "react-router-dom"

function Erro(){
    return(
        <div className="h-[80vh] flex flex-col items-center justify-center text-center text-lg text-white ">
            <h1 className="text-9xl"> ERRO 404</h1>
            <h2 className="text-2xl">Página não encontrada!</h2>
            <Link className="bg-[#FFFC00] rounded-md mt-3 p-1 h-10 w-60 text-black text-2xl" to='/'>Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;