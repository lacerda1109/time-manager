export default function ChronClock(props) {
    return (
        <div
            style={{
                display: 'flex',
                gap: '30px',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p style={{fontSize: '130px', fontWeight: '900'}}>{props.minutes}</p>
                <p style={{fontSize: '20px', fontWeight: '500'}}>min</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p style={{fontSize: '130px', fontWeight: '900'}}>{props.seconds}</p>
                <p style={{fontSize: '20px', fontWeight: '500'}}>seg</p>
            </div>
            <div>
                <p style={{ fontSize: '50px', fontWeight: '900' }}>{props.milisec}</p>
            </div>
        </div>
    )
}