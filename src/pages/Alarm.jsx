import { useState, useEffect } from 'react'
import Page from '../components/Page'
import Clock from '../components/Clock'
import Button from '../components/Button'
import Modal from '../components/Modal'
import SelectNumbers from '../components/SelectNumbers'
import { palette } from '../theme/palette'
import { formatNumber } from '../utils/functions'

export default function Alarm() {
    // CONFIGURAÇÃO DE EXIBIÇÃO DA DATA ---------------------------------------------------------------------
    let date = new Date()
    let weekDay = date.getDay()
    let monthDay = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    switch(weekDay) {
        case 0:
            weekDay = 'Domingo'
            break
        case 1:
            weekDay = 'Segunda'
            break
        case 2:
            weekDay = 'Terça'
            break
        case 3:
            weekDay = 'Quarta'
            break
        case 4:
            weekDay = 'Quinta'
            break
        case 5:
            weekDay = 'Sexta'
            break
        case 6:
            weekDay = 'Sábado'
            break
        default:
            break
    }

    switch(month) {
        case 0:
            month = 'Janeiro'
            break
        case 1:
            month = 'Fevereiro'
            break
        case 2:
            month = 'Março'
            break
        case 3:
            month = 'Abril'
            break
        case 4:
            month = 'Maio'
            break
        case 5:
            month = 'Junho'
            break
        case 6:
            month = 'Julho'
            break
        case 7:
            month = 'Agosto'
            break
        case 8:
            month = 'Setembro'
            break
        case 9:
            month = 'Outubro'
            break
        case 10:
            month = 'Novembro'
            break
        case 11:
            month = 'Dezembro'
            break
        default:
            break
    }

    // FUNCIONAMENTO DO RELÓGIO -----------------------------------------------------------------------------
    const [hour, setHour] = useState(date.getHours())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [seconds, setSeconds] = useState(date.getSeconds())

    useEffect(() => {
        setInterval(() => {
            let d = new Date()
            setHour(d.getHours())
            setMinutes(d.getMinutes())
            setSeconds(d.getSeconds())
        }, 1000)
    },[])

    // LÓGICA PARA ALARME -----------------------------------------------------------------------------------
    // https://stackoverflow.com/questions/53578567/how-can-i-add-a-pause-functionality-in-this-timer-react-native
    const [alarmInterval, setAlarmInterval] = useState('')
    const [cancelAlarm, setCancelAlarm] = useState(false)

    function startAlarm(){
        setAlarmInterval(setInterval(() => {
            let d = new Date()
            let h = d.getHours()
            let m = d.getMinutes()
            let s = d.getSeconds()

            if (h === selectHour && m === selectMinute && s === 0) {
                console.log('DESPERTAR')
                setDefined(false)
                setCancelAlarm(true)
            }
        }, 1000))
    }

    function stopAlarm(){
        clearInterval(alarmInterval);
    }

    useEffect(() => {
        if (cancelAlarm) {
            setCancelAlarm(false)
            stopAlarm()
        }
    }, [cancelAlarm])

    // MODAL CONFIG -----------------------------------------------------------------------------------------
    const [openModal, setOpenModal] = useState(false)
    const [configTitle, setConfigTitle] = useState('')

    const [selectHour, setSelectHour] = useState(0)
    const [selectMinute, setSelectMinute] = useState(0)

    let arrHour = []
    for (let x = 0 ; x < 24 ; x++) {
        arrHour.push(x)
    }
    let arrMin = []
    for (let x = 0 ; x < 60 ; x++) {
        arrMin.push(x)
    }

    const modalBody = (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '15px'
                }}
            >
                <SelectNumbers title="H" state={selectHour} setState={setSelectHour} options={arrHour} />
                <SelectNumbers title="M" state={selectMinute} setState={setSelectMinute} options={arrMin} />
            </div>
            <div /* TITULO */
                style={{width: '100%'}}
            >
                <label>Adicione um título</label>
                <div style={{marginTop: '10px'}}>
                    <input
                        style={{ borderRadius: '4px', width: '100%' }}
                        type="text"
                        value={configTitle}
                        onChange={(e) => setConfigTitle(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )

    function finalButtonFunction() {
        setDefined(true)
        startAlarm()
    }

    // MUDANÇA NA INTERFACE AO DEFINIR ALARME ---------------------------------------------------------------
    const [defined, setDefined] = useState(false)

    let definedTimeStyle = {
        fontSize: '35px',
        fontWeight: 700
    }

    let alarmTitleStyle = {
        fontSize: '25px',
        fontWeight: 500,
        textAlign: 'center'
    }

    let alarmBox = (
        <div
            style={{
                width: '230px',
                padding: '20px',
                backgroundColor: palette.secondaryColor,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
            }}
        >
            {configTitle !== '' ? (<p style={{...alarmTitleStyle}}>{configTitle}</p>) : null}
            <div style={{width: '100%'}}>
                <p style={{textAlign: 'left', fontSize: '18px'}}><i>Definido para</i></p>
                <div style={{marginTop: '5px', display: 'flex', justifyContent: 'center', gap: '2px'}}>
                    <p style={{...definedTimeStyle}}>{formatNumber(selectHour)}</p>
                    <p style={{...definedTimeStyle}}>:</p>
                    <p style={{...definedTimeStyle}}>{formatNumber(selectMinute)}</p>
                </div>
            </div>
            <div onClick={() => {
                setDefined(false)
                stopAlarm()
            }}>
                <Button text="Cancelar" theme="red" />
            </div>
        </div>
    )

    return (
        <>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                headerTitle="Configuração do alarme"
                body={modalBody}
                finalButtonText="Definir"
                finalButtonFunction={finalButtonFunction}
            />
            <Page>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <p><i>{weekDay}, {monthDay} de {month} de {year}</i></p>
                    <div>
                        <Clock hour={formatNumber(hour)} minutes={formatNumber(minutes)} seconds={formatNumber(seconds)} />
                    </div>
                    {!defined ? (
                        <div onClick={() => setOpenModal(true)}>
                            <Button theme="default" text="Configurar alarme" />
                        </div>
                    ) : alarmBox}
                </div>
            </Page>
        </>
    )
}