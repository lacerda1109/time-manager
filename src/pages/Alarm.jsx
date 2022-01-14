import { useState, useEffect } from 'react'
import Page from '../components/Page'
import Clock from '../components/Clock'
import Button from '../components/Button'
import Modal from '../components/Modal'

export default function Alarm(props) {
    function formatNumber(number) {
        return number < 10 ? '0' + number : number
    }

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

    // MODAL CONFIG
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <Modal openModal={openModal} setOpenModal={setOpenModal} headerTitle="Configuração do alarme" />
            <Page>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p><i>{weekDay}, {monthDay} de {month} de {year}</i></p>
                    <div style={{margin: '20px 0'}}>
                        <Clock hour={formatNumber(hour)} minutes={formatNumber(minutes)} seconds={formatNumber(seconds)} />
                    </div>
                    <div onClick={() => setOpenModal(true)}>
                        <Button theme="default" text="Configurar alarme" />
                    </div>
                </div>
            </Page>
        </>
    )
}