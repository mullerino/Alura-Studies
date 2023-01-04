import './index.scss'
import Item from "./Item";
import { listaProps } from "../../types/tarefa";

interface Props{
    list: listaProps[];
    seleciona: (tarefaSelecionada:listaProps)=> void
}

const Lista = ({list, seleciona} : Props) =>{

    return (
        <aside className="listaTarefas"> 
            <h2>Estudos do dia</h2>
            <ul>
                {list.map((tarefas)=>
                    <Item key={tarefas.id} tarefa={tarefas.tarefa} tempo={tarefas.tempo} selecionado={tarefas.selecionado} completado={tarefas.completado} id={tarefas.id} selecionaTarefa = {seleciona}/>
                )}
            </ul>
        </aside>
    )
}

export default Lista