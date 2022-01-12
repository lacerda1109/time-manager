import { Outlet } from "react-router-dom";
import { palette } from "../theme/palette";
import {
    AiFillHome,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInfoCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./IndexNavbar.css";
import NavButton from './NavButton'

export default function IndexNavbar(props) {
    let navbarStyle = {
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        height: '77px'
    };

    return (
        <div style={{height: '100vh'}}>
            <div style={{ borderBottom: `3px solid ${palette.defaultColor}` }}>
                <div style={{ ...navbarStyle }}>
                    <Link to="/"> {/* ÍCONE INICIAL */}
                        <AiFillHome className="navbarIcon" />
                    </Link>

                    {props.nav ? (
                        <div style={{display: 'flex', gap: '15px'}}> {/* LINKS DO MEIO */}
                            <Link to=""><NavButton text="Timer" /></Link>
                            <Link to=""><NavButton text="Cronômetro" /></Link>
                            <Link to=""><NavButton text="Alarme" /></Link>
                        </div>
                    ) : null}

                    <div style={{ display: "flex", gap: "20px" }}> {/* ÍCONES FINAIS */}
                        <a
                            href="https://github.com/lacerda1109"
                            target="_blank"
                        >
                            <AiFillGithub className="navbarIcon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lacerda1109/"
                            target="_blank"
                        >
                            <AiFillLinkedin className="navbarIcon" />
                        </a>
                        <Link to="/sobre">
                            <AiFillInfoCircle className="navbarIcon" />
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
