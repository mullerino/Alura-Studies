import Botao from "../Botão"
import style from './Formulario.module.scss'

interface valuesInput{
    estudo: string
    tempo: string
}

const Forms = () =>{

    return (
        <form className={style.novaTarefa}>
            <div className = {style.inputContainer}>
                <label htmlFor="">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que deseja estudar?" required></input>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="Tempo">Tempo</label>
                <input type="time" step={1} name="tempo" id="tempo" min="00:00:00" max="01:30:00" required/>
            </div>
            <Botao text="Adicionar"/>
        </form>
    )
}

export default Forms