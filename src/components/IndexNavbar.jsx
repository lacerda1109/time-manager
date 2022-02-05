import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { palette } from "../theme/palette";
import {
    AiFillHome,
    AiFillGithub,
    AiFillLinkedin,
    AiFillInfoCircle,
    AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./IndexNavbar.css";
import NavButton from "./NavButton";

export default function IndexNavbar(props) {
    let navbarStyle = {
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        height: "65px",
    };

    const [openMenu, setOpenMenu] = useState(false);
    function handleMenu() {
        setOpenMenu(!openMenu)
    }

    const container = useRef();
    document.addEventListener("mousedown", (e) => {
        if (container.current && !container.current.contains(e.target)) {
            setOpenMenu(false);
        }
    });

    return (
        <div style={{ height: "100vh" }}>
            <div style={{ borderBottom: `2px solid ${palette.defaultColor}` }}>
                <div style={{ ...navbarStyle }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        <Link to="/">
                            <AiFillHome className="navbarIcon" />
                        </Link>

                        {props.nav ? (
                            <div>
                                <div
                                    className="mobileIcon"
                                    onClick={handleMenu}
                                    style={{
                                        display: "none",
                                        backgroundColor: palette.secondaryColor,
                                        padding: "8px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                >
                                    <AiOutlineMenu
                                        style={{
                                            fill: "#fff",
                                            fontSize: "15px",
                                        }}
                                    />
                                </div>
                                {openMenu && (
                                    <div
                                        ref={container}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            gap: "10px",
                                            position: "absolute",
                                            marginTop: "10px",
                                            borderRadius: "4px",
                                            backgroundColor: "#3f474d",
                                            padding: "8px",
                                        }}
                                    >
                                        <div
                                            className="linkWrapper"
                                            onClick={() => setOpenMenu(false)}
                                        >
                                            <NavButton
                                                path="/app/"
                                                text="Timer"
                                            />
                                        </div>
                                        <div
                                            className="linkWrapper"
                                            onClick={() => setOpenMenu(false)}
                                        >
                                            <NavButton
                                                path="cronometro"
                                                text="Cronômetro"
                                            />
                                        </div>
                                        <div
                                            className="linkWrapper"
                                            onClick={() => setOpenMenu(false)}
                                        >
                                            <NavButton
                                                path="alarme"
                                                text="Alarme"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                    {props.nav ? (
                        <div className="navLinks">
                            <NavButton path="/app/" text="Timer" />
                            <NavButton path="cronometro" text="Cronômetro" />
                            <NavButton path="alarme" text="Alarme" />
                        </div>
                    ) : null}

                    <div style={{ display: "flex", gap: "20px" }}>
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
