export default function Page(props) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 76px)',
                color: '#fff',
            }}
        >
            {props.children}
        </div>
    )
}