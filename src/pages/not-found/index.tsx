import { Link } from "react-router-dom";
import './style.css'

export default function NotFound(){
    return(
        <>
     
        <h1>Página não encontrada</h1>
        <p>A URL digitada não foi encontrada</p>
        <hr/>
        <Link to='/'>Voltar para o Home</Link>
        </>
    )
}