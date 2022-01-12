import React, { useState } from 'react'
import { palette } from '../theme/palette'

export default function NavButton(props) {
    const [hover, setHover] = useState(false)

    let buttonStyle = {
        fontSize: '18px',
        fontWeight: '700',
        padding: '10px 30px',
        border: 0,
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: '#fff',
        transition: 'background-color .5s'
    }

    let hoverStyle = {
        backgroundColor: palette.secondaryColor,
        transition: 'background-color .5s'
    }

    return (
        <button
            style={{...buttonStyle, ...hover ? hoverStyle : null}}
            onMouseEnter={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            {props.text}
        </button>
    )
}