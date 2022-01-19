import Page from '../components/Page'
import ChronClock from '../components/ChronClock'
import Button from '../components/Button'

export default function Chronometer() {

    return (
        <Page>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                <ChronClock
                    minutes="00"
                    seconds="00"
                    milisec="00"
                />
                <div>
                    <Button theme="default" text="Começar" />
                </div>
            </div>
        </Page>
    )
}