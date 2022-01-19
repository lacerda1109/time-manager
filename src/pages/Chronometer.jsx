import { useState } from 'react'
import { palette } from '../theme/palette'
import Page from '../components/Page'
import ChronClock from '../components/ChronClock'
import Button from '../components/Button'

export default function Chronometer() {
    const [started, setStarted] = useState(false)
    const [paused, setPaused] = useState(true)

    // FUNÇÕES DO CRONÔMETRO --------------------------------------------------------------------------------
    function startChronometer() {
        setStarted(true)
        setPaused(false)
    }

    // MUDANÇAS NA INTERFACE --------------------------------------------------------------------------------
    const [stepBox, setStepBox] = useState(false)

    function step() {
        setStepBox(true)
    }

    let [arrStep, setArrStep] = useState([
        '00:02:424',
        '00:04:837',
        // '00:06:637',
    ])
    console.log(arrStep)

    let stepBoxLayout = (<div
        style={{
            width: '230px',
            overflow: 'auto',
            height: '135px',
            padding: '20px',
            backgroundColor: palette.secondaryColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
        }}
    >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <p>mock</p>
            {arrStep.map((el, i) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>#{i + 1}</p>
                        <p>{el}</p>
                    </div>
                )
            })}
        </div>
    </div>)

    return (
        <Page>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                <ChronClock
                    minutes="00"
                    seconds="00"
                    milisec="00"
                />
                {!started ? (
                    <div onClick={() => startChronometer()}>
                        <Button theme="default" text="Começar" />
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <div>
                            <Button theme="red" text="Recomeçar" />
                        </div>
                        <div onClick={() => step()}>
                            <Button theme="orange" text="Volta" />
                        </div>
                        <div onClick={() => setPaused(!paused)}>
                            <Button theme="default" text={paused ? "Continuar" : "Pausar"} />
                        </div>
                    </div>
                )}
                {stepBox ? (stepBoxLayout) : null}
            </div>
        </Page>
    )
}