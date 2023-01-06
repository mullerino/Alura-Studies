import Botao from "../Botão"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import timeToSeconds from "../../common/utils/date"
import { listaProps } from "../../types/tarefa"
import { useEffect, useState } from "react"

interface cronometroProps{
    selecionado: listaProps | undefined;
    finalizada: ()=>void
}

const Cronometro = ({selecionado, finalizada}:cronometroProps) =>{
    const [tempo,setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(timeToSeconds(selecionado.tempo))
        }
    
    }, [selecionado])

    const regressiva = (contador:number = 0)=>{
        setTimeout(()=>{
            if(contador>0){
                setTempo(contador-1)
                return regressiva(contador-1)
            }
            finalizada()
        },1000)
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao text="Iniciar" type="button" onClick={()=>regressiva(tempo)}/>
        </div>
    )
}

export default Cronometro