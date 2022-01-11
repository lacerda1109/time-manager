import React, { useState } from 'react'
import { palette } from '../theme/palette'

export default function Button(props) {
    let buttonStyle = {
        fontSize: '18px',
        fontWeight: '700',
        padding: '10px 30px',
        border: 0,
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color .5s',
        backgroundColor: palette[props.theme].normal.background,
        color: palette[props.theme].normal.text
    }

    let hoverStyle = {
        transition: 'background-color .5s',
        backgroundColor: palette[props.theme].hover.background
    }

    const [hover, setHover] = useState(false)

    return (
        <button
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