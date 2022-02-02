import "./ClockStyle.css";

export default function ChronClock(props) {
    return (
        <div className="clockWrapper">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <p className="number">{props.minutes}</p>
                <p className="text">min</p>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <p className="number">{props.seconds}</p>
                <p className="text">seg</p>
            </div>
            <div>
                <p
                    className="lastNumber"
                >
                    {props.milisec}
                </p>
            </div>
        </div>
    );
}
