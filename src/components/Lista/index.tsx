import './index.scss'
import Item from "./Item";
import { listaProps } from "../../types/tarefa";



const Lista = ({list}:{list:listaProps[]}) =>{

    return (
        <aside className="listaTarefas"> 
            <h2>Estudos do dia</h2>
            <ul>
                {list.map((tarefas)=>
                    <Item key={tarefas.tarefa} tarefa={tarefas.tarefa} tempo={tarefas.tempo}/>
                )}
            </ul>
        </aside>
    )
}

export default Lista