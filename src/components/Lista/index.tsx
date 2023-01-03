import React from "react";
import './index.scss'
import Item from "./Item";

const Lista = () =>{

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'JavaScript',
        tempo:'02:00:00'
    },
    {
        tarefa: 'Java',
        tempo:'01:00:00'
    }
    ]
    return (
        <aside className="listaTarefas"> 
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefas)=>
                    <Item key={tarefas.tarefa} tarefa={tarefas.tarefa} tempo={tarefas.tempo}/>
                )}
            </ul>
        </aside>
    )
}

export default Lista