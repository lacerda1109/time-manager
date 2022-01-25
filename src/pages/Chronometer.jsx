import { useState, useEffect } from "react";
import { palette } from "../theme/palette";
import Page from "../components/Page";
import ChronClock from "../components/ChronClock";
import Button from "../components/Button";
import { formatNumber } from "../utils/functions";

export default function Chronometer() {
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(true);
    const [initialTime, setInitialTime] = useState(0); // Tempo inicial
    const [wasPaused, setWasPaused] = useState(false);
    const [gap, setGap] = useState(0); // Tempo atual fixo depois de pausar
    const [time, setTime] = useState(0); // Tempo do cronômetro

    // FUNÇÕES DO CRONÔMETRO --------------------------------------------------------------------------------
    function startChronometer() {
        setInitialTime(new Date().getTime()); // Salva o tempo inicial como o tempo de quando foi clicado
        setStarted(true);
        setPaused(false);
    }

    let interval;
    useEffect(() => {
        if (!paused) {
            interval = setInterval(() => {
                let future = new Date().getTime();
                if (!wasPaused) {
                    setTime(future - initialTime + 10);
                } else if (wasPaused) {
                    setTime(future - gap + 10);
                }
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [paused]);

    // FUNÇÃO DE PAUSE --------------------------------------------------------------------------------------
    function pause() {
        setWasPaused(true);
        setGap(new Date().getTime() - time);
        setPaused(paused ? false : true);
    }

    // MUDANÇAS NA INTERFACE --------------------------------------------------------------------------------
    const [stepBox, setStepBox] = useState(false);

    function timeForBox() {
        let milisec = formatNumber(Math.floor(time % 1000));

        return `${formatNumber(
            Math.floor((time / (60 * 1000)) % 60)
        )}:${formatNumber(Math.floor((time / 1000) % 60))}:${
            milisec < 100
                ? "0" + milisec
                : milisec < 10
                ? "00" + milisec
                : milisec
        }`;
    }

    function step() {
        if (!paused) {
            setStepBox(true);
            setArrStep((prev) => [...prev, timeForBox()]);
        }
    }

    let [arrStep, setArrStep] = useState([]);

    let stepBoxLayout = (
        <div
            style={{
                width: "230px",
                overflow: "auto",
                height: "135px",
                padding: "20px",
                backgroundColor: palette.secondaryColor,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                }}
            >
                {arrStep.map((el, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <p>#{i + 1}</p>
                            <p>{el}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <Page>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <ChronClock
                    // minutes={formatNumber(Math.floor(initialTime / 60000) % 60)}
                    // seconds={formatNumber(Math.floor((initialTime / 1000) % 60))}
                    // milisec={formatNumber((initialTime / 10) % 100)}
                    minutes={formatNumber(
                        Math.floor((time / (60 * 1000)) % 60)
                    )}
                    seconds={formatNumber(Math.floor((time / 1000) % 60))}
                    milisec={formatNumber(Math.floor((time / 10) % 100))}
                />
                {!started ? (
                    <div onClick={() => startChronometer()}>
                        <Button theme="default" text="Começar" />
                    </div>
                ) : (
                    <div style={{ display: "flex", gap: "15px" }}>
                        <div onClick={() => setInitialTime(0)}>
                            <Button theme="red" text="Recomeçar" />
                        </div>
                        <div onClick={() => step()}>
                            <Button theme="orange" text="Volta" />
                        </div>
                        <div onClick={() => pause()}>
                            <Button
                                theme="default"
                                text={paused ? "Continuar" : "Pausar"}
                            />
                        </div>
                    </div>
                )}
                {stepBox ? stepBoxLayout : null}
            </div>
        </Page>
    );
}
