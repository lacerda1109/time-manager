import { useRef } from 'react'
import { palette } from '../theme/palette'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import './ConfigModal.css'

export default function ConfigModal(props) {
    const modal = useRef()

    return (
        <div
            className="modalWrapper"
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
                    props.setOpenModal(false)
                } else {
                    return
                }
            }}
        >
            <div
                className="modal"
                style={{
                    width: '400px',
                    backgroundColor: palette.bgSecondaryColor,
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
                    <AiOutlineClose style={{ cursor:'pointer' }} onClick={() => props.setOpenModal(false)} />
                </div>
                <div // MODAL BODY
                    className="modalBody"
                    style={{
                        padding: '25px',
                    }}
                >
                    {props.body}
                    <div
                        style={{
                            display: 'flex',
                            gap: '15px',
                            justifyContent: 'flex-end',
                            marginTop: '30px'
                        }}
                    >
                        <div onClick={() => props.setOpenModal(false)}>
                            <Button theme="secondary" text="Cancelar" />
                        </div>
                        <div  onClick={() => {
                            props.setOpenModal(false)
                            props.finalButtonFunction()
                        }}>
                            <Button theme="default" text={props.finalButtonText} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}