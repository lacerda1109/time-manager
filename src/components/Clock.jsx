export default function Clock(props) {
    return (
        <div
            style={{
                display: 'flex',
                gap: '30px'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p style={{fontSize: '150px', fontWeight: '900'}}>{props.hour}</p>
                <p style={{fontSize: '20px', fontWeight: '900'}}>hor</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p style={{fontSize: '150px', fontWeight: '900'}}>{props.minutes}</p>
                <p style={{fontSize: '20px', fontWeight: '900'}}>min</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <p style={{fontSize: '150px', fontWeight: '900'}}>{props.seconds}</p>
                <p style={{fontSize: '20px', fontWeight: '900'}}>seg</p>
            </div>
        </div>
    )
}