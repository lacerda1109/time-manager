import { useState, useEffect } from 'react'
import Page from '../components/Page'
import Clock from '../components/Clock'
import Button from '../components/Button'
import Modal from '../components/Modal'
import {
    IoIosArrowBack,
    IoIosArrowForward
} from 'react-icons/io'
import { palette } from '../theme/palette'

export default function Alarm(props) {
    // FUNÇÃO DE FORMATAR NÚMEROS ---------------------------------------------------------------------------
    function formatNumber(number) {
        return number < 10 ? '0' + number : number
    }

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
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    alignItems: 'center'
                }}
            >
                <div /* NUMEROS */
                    style={{
                        display: 'flex',
                        gap: '15px'
                    }}
                >
                    <div /* Hora */
                        style={{ textAlign: 'center' }}
                    >
                        <label>H</label>
                        <div
                            style={{ display: 'flex', marginTop: '10px' }}
                        >
                            <div
                                style={{
                                    backgroundColor: palette.secondaryColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '4px 0 0 4px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectHour(selectHour - 1)}
                            ><IoIosArrowBack /></div>
                            <select
                                style={{
                                    width: '55px'
                                }}
                                value={selectHour}
                                onChange={(e) => {
                                    setSelectHour(Number(e.target.value))
                                }}
                            >
                                {arrHour.map((el, i) => (<option key={i} value={el}>{formatNumber(el)}</option>))}
                            </select>
                            <div
                                style={{
                                    backgroundColor: palette.secondaryColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '0 4px 4px 0',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectHour(selectHour + 1)}
                            ><IoIosArrowForward /></div>
                        </div>
                    </div>
                    <div /* Minuto */
                        style={{ textAlign: 'center' }}
                    >
                        <label>M</label>
                        <div
                            style={{ display: 'flex', marginTop: '10px' }}
                        >
                            <div
                                style={{
                                    backgroundColor: palette.secondaryColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '4px 0 0 4px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectMinute(selectMinute - 1)}
                            ><IoIosArrowBack /></div>
                            <select
                                style={{
                                    width: '55px'
                                }}
                                value={selectMinute}
                                onChange={(e) => {
                                    setSelectMinute(Number(e.target.value))
                                }}
                            >
                                {arrMin.map((el, i) => (<option key={i} value={el}>{formatNumber(el)}</option>))}
                            </select>
                            <div
                                style={{
                                    backgroundColor: palette.secondaryColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '0 4px 4px 0',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectMinute(selectMinute + 1)}
                            ><IoIosArrowForward /></div>
                        </div>
                    </div>
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
            <div
                style={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'flex-end',
                    marginTop: '30px'
                }}
            >
                <div onClick={() => setOpenModal(false)}>
                    <Button theme="secondary" text="Cancelar" />
                </div>
                <div  onClick={() => {
                    setDefined(true)
                    setOpenModal(false)
                }}>
                    <Button theme="default" text="Definir" />
                </div>
            </div>
        </div>
    )

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
            {configTitle != '' ? (<p style={{...alarmTitleStyle}}>{configTitle}</p>) : null}
            <div style={{width: '100%'}}>
                <p style={{textAlign: 'left', fontSize: '18px'}}><i>Definido para</i></p>
                <div style={{marginTop: '5px', display: 'flex', justifyContent: 'center', gap: '2px'}}>
                    <p style={{...definedTimeStyle}}>{formatNumber(selectHour)}</p>
                    <p style={{...definedTimeStyle}}>:</p>
                    <p style={{...definedTimeStyle}}>{formatNumber(selectMinute)}</p>
                </div>
            </div>
            <div onClick={() => setDefined(false)}>
                <Button text="Cancelar" theme="red" />
            </div>
        </div>
    )

    return (
        <>
            <Modal openModal={openModal} setOpenModal={setOpenModal} headerTitle="Configuração do alarme" body={modalBody} />
            <Page>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p><i>{weekDay}, {monthDay} de {month} de {year}</i></p>
                    <div style={{margin: '20px 0'}}>
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