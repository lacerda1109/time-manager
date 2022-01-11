import { Outlet } from 'react-router-dom'
import { palette } from '../theme/palette'
import { AiFillHome, AiFillGithub, AiFillLinkedin, AiFillInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function IndexNavbar() {
    let navbarStyle = {
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0'
    }

    let iconsStyle = {
        color: '#fff',
        fontSize: '28px',
        transition: 'color .5s'
    }

    return (
        <>
            <div style={{borderBottom: `3px solid ${palette.defaultColor}`}}>
                <div
                    style={{...navbarStyle}}
                >
                    <Link to="/"><AiFillHome style={{...iconsStyle}} /></Link>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <a href="https://github.com/lacerda1109" target="_blank">
                            <AiFillGithub style={{...iconsStyle}} />
                        </a>
                        <a href="https://www.linkedin.com/in/lacerda1109/" target="_blank">
                            <AiFillLinkedin style={{...iconsStyle}} />
                        </a>
                        <Link to="/sobre">
                            <AiFillInfoCircle style={{...iconsStyle}} />
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}