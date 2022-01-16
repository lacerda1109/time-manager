import { useState } from 'react'
import Page from '../components/Page'
import Clock from '../components/Clock'
import Button from '../components/Button'
import Modal from '../components/Modal'
import SelectNumbers from '../components/SelectNumbers'
import { formatNumber } from '../utils/functions'

export default function Timer() {
    // ESTADOS DOS NÚMEROS PARA DISPLAY ---------------------------------------------------------------------
    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(2)
    const [seconds, setSeconds] = useState(0)

    // CONFIGURAÇÕES DO MODAL -------------------------------------------------------------------------------
    const [openModal, setOpenModal] = useState(false)

    const [selectHour, setSelectHour] = useState(0)
    const [selectMinutes, setSelectMinutes] = useState(2)
    const [selectSeconds, setSelectSeconds] = useState(0)
    const [configTitle, setConfigTitle] = useState('')

    let arrHour = []
    for (let x = 0 ; x < 24 ; x++) {
        arrHour.push(x)
    }
    let arrMin = []
    for (let x = 0 ; x < 60 ; x++) {
        arrMin.push(x)
    }
    let arrSec = []
    for (let x = 0 ; x < 60 ; x ++) {
        if (x % 5 == 0) {
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
                <SelectNumbers title="S" state={selectSeconds} setState={setSelectSeconds} options={arrSec} />
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

    function finalButtonFunction() {}

    return (
        <>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                headerTitle="Configuração do timer"
                body={modalBody}
                finalButtonText="Começar"
                finalButtonFunction={finalButtonFunction}
            />
            <Page>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <Clock hour={formatNumber(hour)} minutes={formatNumber(minutes)} seconds={formatNumber(seconds)} />
                    <div style={{display: 'flex', gap: '15px'}}>
                        <div
                            onClick={() => setOpenModal(true)}
                        >
                            <Button text="Configurar timer" theme="secondary" />
                        </div>
                        <div>
                            <Button text="Começar" theme="default" />
                        </div>
                    </div>
                </div>
            </Page>
        </>
    )
}