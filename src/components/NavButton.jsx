import React, { useState } from 'react'
import { palette } from '../theme/palette'
import { NavLink } from 'react-router-dom'

export default function NavButton(props) {
    const [hover, setHover] = useState(false)

    let buttonStyle = {
        fontSize: '18px',
        fontWeight: '400',
        padding: '8px 30px',
        border: 0,
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: '#fff',
        transition: 'background-color .5s',
        textDecoration: 'none'
    }

    let hoverStyle = {
        backgroundColor: palette.secondaryColor,
        transition: 'background-color .5s'
    }

    function activeLinkStyle() {
        buttonStyle.backgroundColor = palette.defaultColor
        hoverStyle.backgroundColor = palette.defaultColor
    }

    return (
        <NavLink
            to={props.path}
            onMouseEnter={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={({isActive}) => {
                if (isActive == true) {
                    activeLinkStyle()
                } else {
                    buttonStyle.backgroundColor = 'transparent'
                    hoverStyle.backgroundColor = palette.secondaryColor
                }
                return {...buttonStyle, ...hover ? hoverStyle : null}
            }}
        >
            {props.text}
        </NavLink>
    )
}