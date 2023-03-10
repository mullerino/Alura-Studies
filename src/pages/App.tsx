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

  const finalizarTarefa = ()=>{
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAntigas=> tarefasAntigas.map(tarefa=>{
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.App}>
      <Forms addTarefas={setTarefas}></Forms>
      <Lista list = {tarefas} seleciona = {selecionarTarefa}></Lista>
      <Cronometro selecionado ={selecionado} finalizada = {finalizarTarefa}></Cronometro>
    </div>
  )
}

export default App
