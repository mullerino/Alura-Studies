import style from './Relogio.module.scss'

interface relogioProps{
    tempo: number|undefined
}

const Relogio= ({tempo = 0} :relogioProps)=>{
    const minutes = Math.floor(tempo/60)
    const seconds = tempo % 60

    const [minuteDezena,minuteUnidade] = String(minutes).padStart(2,'0')
    const [secondDezena,secondUnidade] = String(seconds).padStart(2,'0')

    console.log('minutos',minuteDezena,minuteUnidade)

    return(
        <>
            <span className={style.relogioNumero}>{minuteDezena}</span>
            <span className={style.relogioNumero}>{minuteUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDezena}</span>
            <span className={style.relogioNumero}>{secondUnidade}</span>
        </>
    )
}

export default Relogio