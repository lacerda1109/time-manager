import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './routes'
import IndexNavbar from './components/IndexNavbar'
import Home from './pages/Home'
import About from './pages/About'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexNavbar nav />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
