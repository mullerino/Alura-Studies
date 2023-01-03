import React, { useState } from "react"
import Cronometro from "../components/Cronometro"
import Forms from "../components/Forms"
import Lista from "../components/Lista"
import style from './App.module.scss'
import { listaProps } from "../types/tarefa"

function App() {
  const [tarefas,setTarefas] = useState<listaProps[]>([])

  return (
    <div className={style.App}>
      <Forms addTarefas={setTarefas}></Forms>
      <Lista list = {tarefas}></Lista>
      <Cronometro></Cronometro>
    </div>
  )
}

export default App
