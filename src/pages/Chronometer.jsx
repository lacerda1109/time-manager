import { useState } from 'react'
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
                        <div>
                            <Button theme="orange" text="Volta" />
                        </div>
                        <div onClick={() => setPaused(!paused)}>
                            <Button theme="default" text={paused ? "Continuar" : "Pausar"} />
                        </div>
                    </div>
                )}
            </div>
        </Page>
    )
}