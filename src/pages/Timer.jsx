import { useState, useEffect } from 'react'
import Page from '../components/Page'
import Clock from '../components/Clock'
import Button from '../components/Button'
import ConfigModal from '../components/ConfigModal'
import ConfirmModal from '../components/ConfirmModal'
import SelectNumbers from '../components/SelectNumbers'
import { formatNumber } from '../utils/functions'

export default function Timer() {
    // CONFIGURAÇÕES DO MODAL -------------------------------------------------------------------------------
    const [openModal, setOpenModal] = useState(false)

    const [selectHour, setSelectHour] = useState(0)
    const [selectMinutes, setSelectMinutes] = useState(2)
    const [selectSeconds, setSelectSeconds] = useState(0)
    const [configTitle, setConfigTitle] = useState('')

    let arrHour = []
    for (let x = 0 ; x < 11 ; x++) {
        arrHour.push(x)
    }
    let arrMin = []
    for (let x = 0 ; x < 60 ; x++) {
        arrMin.push(x)
    }
    let arrSec = []
    for (let x = 0 ; x < 60 ; x ++) {
        if (x % 5 === 0) {
            arrSec.push(x)
        }
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
                <SelectNumbers title="M" state={selectMinutes} setState={setSelectMinutes} options={arrMin} />
                <SelectNumbers five title="S" state={selectSeconds} setState={setSelectSeconds} options={arrSec} />
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

    // CONFIGURAÇÕES DOS BOTÕES E INTERFACE -----------------------------------------------------------------
    const [started, setStarted] = useState(false)
    const [paused, setPaused] = useState(true)
    const [timerTitle, setTimerTitle] = useState('')

    let timerTitleStyle = {
        fontSize: '25px',
        fontWeight: 500,
        textAlign: 'center'
    }

    // FUNÇÕES DO TIMER -------------------------------------------------------------------------------------
    // https://www.youtube.com/watch?v=sSWGdj8a5Fs VIDEO TIMER

    const [time, setTime] = useState((selectHour * 3600000) + (selectMinutes * 60000) + (selectSeconds * 1000))

    let interval
    useEffect(() => {
        if (!paused) {
            interval = setInterval(() => {
                setTime(prev => prev - 1000)
                // Neste escopo não conseguimos acessar o valor atualizado da variável "time"
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [paused])

    useEffect(() => {
        if (time === 0) {
            setPaused(true)
            setStarted(false)
            setConfirmModal(true)
        }
    }, [time])
    
    function startTimer() {
        setStarted(true)
        setTime((selectHour * 3600000) + (selectMinutes * 60000) + (selectSeconds * 1000))
        setTimerTitle(configTitle)
        setPaused(false)
    }

    function pauseTimer() {
        setPaused(paused ? false : true)
    }

    function restartTimer() {
        setTime((selectHour * 3600000) + (selectMinutes * 60000) + (selectSeconds * 1000))
    }

    // CONFIRMAÇÃO ------------------------------------------------------------------------------------------
    const [confirmModal, setConfirmModal] = useState(false)
    function closeConfirmModal() {
        setConfirmModal(false)
    }
    let confirmModalBody = (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <label>Seu timer {timerTitle !== '' ? timerTitle + ' ' : ''}chegou ao fim!</label>
            <div
                onClick={() => closeConfirmModal()}
            >
                <Button text="Finalizar" theme="red" />
            </div>
        </div>
    )

    return (
        <>
            <ConfigModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                headerTitle="Configuração do timer"
                body={modalBody}
                finalButtonText="Começar"
                finalButtonFunction={startTimer}
            />
            <ConfirmModal
                openModal={confirmModal}
                closeConfirmModal={closeConfirmModal}
                headerTitle="Fim do timer"
                body={confirmModalBody}
            />
            <Page>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    {timerTitle !== '' ? (<p style={{...timerTitleStyle}}>{timerTitle}</p>) : null}
                    <Clock
                        hour={formatNumber(Math.floor(time / (60 * 60000) % 60))}
                        minutes={formatNumber(Math.floor((time / (60000)) % 60))}
                        seconds={formatNumber((time / 1000) % 60)}
                    />
                    <div style={{display: 'flex', gap: '15px'}}>
                        <div
                            onClick={() => setOpenModal(true)}
                        >
                            <Button text="Configurar timer" theme="secondary" />
                        </div>
                        {!started ? (
                            <div onClick={() => {
                                startTimer()
                            }}>
                                <Button text="Começar" theme="default" />
                            </div>
                        ) : (
                            <>
                                <div onClick={() => restartTimer()}>
                                    <Button text="Recomeçar" theme="red" />
                                </div>
                                <div onClick={() => pauseTimer()}>
                                    <Button text={paused ? "Continuar" : "Pausar"} theme="default" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Page>
        </>
    )
}