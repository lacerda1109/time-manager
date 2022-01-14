import './Page.css'

export default function Page(props) {
    return (
        <div
            className="Page"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 67px)',
                color: '#fff',
            }}
        >
            {props.children}
        </div>
    )
}