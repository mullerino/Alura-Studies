import './item.scss'

interface itensProps{
    tarefa: string;
    tempo: string;
}

const Item = ({tarefa,tempo}: itensProps)=>{
    return(
        <li className="item">
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item