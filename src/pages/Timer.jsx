import { useState } from 'react'
import Page from '../components/Page'
import Clock from '../components/Clock'
import Button from '../components/Button'

export default function Timer() {
    // FUNÇÃO DE FORMATAR NÚMEROS ---------------------------------------------------------------------------
    function formatNumber(number) {
        return number < 10 ? '0' + number : number
    }

    // ESTADOS DOS NÚMEROS PARA DISPLAY ---------------------------------------------------------------------
    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(2)
    const [seconds, setSeconds] = useState(0)

    return (
        <>
            <Page>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <Clock hour={formatNumber(hour)} minutes={formatNumber(minutes)} seconds={formatNumber(seconds)} />
                    <div style={{display: 'flex', gap: '15px'}}>
                        <div>
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