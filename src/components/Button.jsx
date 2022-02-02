import React, { useState } from 'react'
import { palette } from '../theme/palette'
import './Button.css'

export default function Button(props) {
    let buttonStyle = {
        fontSize: '18px',
        fontWeight: '400',
        padding: '8px 30px',
        border: 0,
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color .5s',
        backgroundColor: palette[props.theme].normal.background,
        color: palette[props.theme].normal.text,
    }

    let hoverStyle = {
        transition: 'background-color .5s',
        backgroundColor: palette[props.theme].hover.background
    }

    const [hover, setHover] = useState(false)

    return (
        <button
            className='button'
            onMouseEnter={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{
                ...buttonStyle,
                ...hover ? hoverStyle : null
            }}
        >
            {props.text}
        </button>
    )
}