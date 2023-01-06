import { listaProps } from '../../../types/tarefa'
import style from './item.module.scss'

interface Props extends listaProps{
    selecionaTarefa: (tarefaSelecionada:listaProps)=>void;
}


const Item = ({tarefa,tempo,selecionado,completado,id,selecionaTarefa}: Props)=>{
    const clicked = ()=>{
        if(!completado)
            selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })
    }
    return( 
        <li className={`${style.item} ${selecionado? style.itemSelecionado: ''} ${completado? style.itemCompletado: ''}`} onClick={clicked}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}

export default Item