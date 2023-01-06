import './index.scss'

interface nomeProps{
    text: string,
    type?: "button" | "submit" | "reset" | undefined
    onClick?: ()=>void 
}

const Botao = ({text,type,onClick}:nomeProps) =>{
    return(
        <button className='botao' type={type} onClick={onClick}>{text}</button>
    )
}    

export default Botao