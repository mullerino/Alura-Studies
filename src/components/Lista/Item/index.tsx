import { listaProps } from '../../../types/tarefa'
import style from './item.module.scss'

interface Props extends listaProps{
    selecionaTarefa: (tarefaSelecionada:listaProps)=>void
}


const Item = ({tarefa,tempo,selecionado,completado,id,selecionaTarefa}: Props)=>{
    console.log('item atual:',{tarefa,tempo,selecionado,completado,id})

    const clicked = ()=>{
        selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })
        console.log()
    }
    return( 
        <li className={`${style.item} ${selecionado? style.itemSelecionado: ''}`}onClick={clicked}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item