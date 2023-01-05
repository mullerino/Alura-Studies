import React, { useState } from "react"
import Cronometro from "../components/Cronometro"
import Forms from "../components/Forms"
import Lista from "../components/Lista"
import style from './App.module.scss'
import { listaProps } from "../types/tarefa"

function App() {
  const [tarefas,setTarefas] = useState<listaProps[]>([])
  const [selecionado,setSelecionado] = useState<listaProps>()

  const selecionarTarefa = (tarefaSelecionada:listaProps)=>{
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAntigas=> tarefasAntigas.map(tarefa=>({
      ...tarefa,
      selecionado: tarefa.id == tarefaSelecionada.id ? true:false
    })))
  }

  return (
    <div className={style.App}>
      <Forms addTarefas={setTarefas}></Forms>
      <Lista list = {tarefas} seleciona = {selecionarTarefa}></Lista>
      <Cronometro selecionado ={selecionado}></Cronometro>
    </div>
  )
}

export default App
