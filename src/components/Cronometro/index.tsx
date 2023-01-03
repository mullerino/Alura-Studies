import Botao from "../Botão"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'

const Cronometro = () =>{
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao text="Iniciar" type="button"/>
        </div>
    )
}

export default Cronometro