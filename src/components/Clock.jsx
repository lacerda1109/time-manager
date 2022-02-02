import './Clock.css'

export default function Clock(props) {
    return (
        <div className='clockWrapper'>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p className="number">{props.hour}</p>
                <p className="text">hor</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p className="number">{props.minutes}</p>
                <p className="text">min</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p className="number">{props.seconds}</p>
                <p className="text">seg</p>
            </div>
        </div>
    )
}