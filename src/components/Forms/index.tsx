import React, { useState } from "react"
import Botao from "../Botão"
import style from './Formulario.module.scss'
import { listaProps } from "../../types/tarefa"
import {v4 as uuidv4} from 'uuid'


interface formsProps{
    addTarefas: React.Dispatch<React.SetStateAction<listaProps[]>>
}

const Forms = ({addTarefas}:formsProps) =>{
    const [task,setTask] = useState<string>('')
    const [time,setTime] = useState<string>('00:00')

    const tarefa = {
        tarefa: task,
        tempo: time
    }

    const addNewTask = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addTarefas(tarefas=>
            [...tarefas,
                {
                    ...tarefa, 
                    selecionado:false, 
                    completado:false,
                    id: uuidv4()
                }
            ])
        setTask('')
        setTime('00:00')
    }

    return (
        <form className={style.novaTarefa} onSubmit={addNewTask}>
            <div className = {style.inputContainer}>
                <label htmlFor="">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que deseja estudar?" required value={task} onChange={(e)=>setTask(e.target.value)}></input>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="Tempo">Tempo</label>
                <input type="time" step={1} value={time} name="tempo" id="tempo" min="00:00:00" max="01:30:00" required onChange={(e)=>setTime(e.target.value)}/>
            </div>
            <Botao text="Adicionar" type="submit"/>
        </form>
    )
}

export default Forms