import Page from '../components/Page'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div>
            <Page>
                <div
                    className="mainContainer"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '800px',
                    }}
                >
                    <h1>Time Manager</h1>
                    <p style={{margin: '50px 0'}}>Uma simples, rápida e minimalista aplicação<br />web para gerenciar seu tempo. Atinja<br />um dia mais produtivo.</p>
                    <div style={{display: 'flex', gap: '15px'}}>
                        <Button theme="default" text="Começar" />
                        <Link to="/sobre"><Button theme="secondary" text="Saiba mais" /></Link>
                    </div>
                </div>
            </Page>
        </div>
    )
}