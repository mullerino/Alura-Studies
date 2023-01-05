import { listaProps } from '../../../types/tarefa'
import style from './item.module.scss'

interface Props extends listaProps{
    selecionaTarefa: (tarefaSelecionada:listaProps)=>void
}


const Item = ({tarefa,tempo,selecionado,completado,id,selecionaTarefa}: Props)=>{
    const clicked = ()=>{
        selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })
    }
    return( 
        <li className={`${style.item} ${selecionado? style.itemSelecionado: ''}`} onClick={clicked}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item