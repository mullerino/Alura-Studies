import './index.scss'

interface nomeProps{
    text: string
}

const Botao = ({text}:nomeProps) =>{

    const addTarefa = (item:any)=>{
        item.preventDefault()
        console.log('Tarefa adicionada')
    }
    
    return(
        <button className='botao' onClick={addTarefa}>{text}</button>
    )
}    

export default Botao