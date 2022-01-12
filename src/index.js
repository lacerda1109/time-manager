import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './routes'
import IndexNavbar from './components/IndexNavbar'
import Home from './pages/Home'
import About from './pages/About'
import Timer from './pages/Timer'
import Chronometer from './pages/Chronometer'
import Alarm from './pages/Alarm'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexNavbar />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<About />} />
                </Route>
                <Route path="/app" element={<IndexNavbar nav />}>
                    <Route index element={<Timer />} />
                    <Route path="cronometro" element={<Chronometer />} />
                    <Route path="alarme" element={<Alarm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
