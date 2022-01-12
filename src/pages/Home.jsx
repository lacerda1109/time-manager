import Page from "../components/Page";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div>
            <Page>
                <div
                    className="mainContainer"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        height: '100%',
                    }}
                >
                    <h1>Time Manager</h1>
                    <p className="paragraph">Uma simples, rápida e minimalista aplicação web para gerenciar seu tempo. Atinja um dia mais produtivo.</p>
                    <div className="buttons">
                        <Button theme="default" text="Começar" />
                        <Link to="/sobre">
                            <Button theme="secondary" text="Saiba mais" />
                        </Link>
                    </div>
                </div>
            </Page>
        </div>
    );
}
