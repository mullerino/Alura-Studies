import './index.scss'

interface nomeProps{
    text: string,
    type?: "button" | "submit" | "reset" | undefined
}

const Botao = ({text,type}:nomeProps) =>{
    return(
        <button className='botao' type={type}>{text}</button>
    )
}    

export default Botao