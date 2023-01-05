import Botao from "../Botão"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import timeToSeconds from "../../common/utils/date"
import { listaProps } from "../../types/tarefa"
import { useEffect, useState } from "react"

interface cronometroProps{
    selecionado: listaProps | undefined
}

const Cronometro = ({selecionado}:cronometroProps) =>{
    //console.log('convertido:', timeToSeconds(selecionado.tempo))
    const [tempo,setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(timeToSeconds(selecionado.tempo))
        }
    
    }, [selecionado])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao text="Iniciar" type="button"/>
        </div>
    )
}

export default Cronometro