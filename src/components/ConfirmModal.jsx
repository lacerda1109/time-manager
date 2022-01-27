import { useRef } from 'react'
import { palette } from '../theme/palette'
import { AiOutlineClose } from 'react-icons/ai'

export default function ConfirmModal(props) {
    const modal = useRef()

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                position: 'fixed',
                top: 0,
                left: 0,
                display: props.openModal ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}
            ref={modal}
            onClick={(e) => {
                if (e.target === modal.current) {
                    props.closeConfirmModal()
                } else {
                    return
                }
            }}
        >
            <div
                style={{
                    width: '400px',
                    backgroundColor: palette.bgSecondaryColor
                }}
            >
                <div // MODAL HEADER
                    style={{
                        padding: '12px 25px',
                        backgroundColor: palette.secondaryColor,
                        borderBottom: `2px solid ${palette.defaultColor}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <label>{props.headerTitle}</label>
                    <AiOutlineClose style={{ cursor:'pointer' }} onClick={() => props.closeConfirmModal()} />
                </div>
                <div // MODAL BODY
                    style={{
                        padding: '25px'
                    }}
                >
                    {props.body}
                    
                </div>
            </div>
        </div>
    )
}