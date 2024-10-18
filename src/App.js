import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Accomodation from "./pages/Accomodation/accomodation";
import Error from "./pages/Error/error";
import About from "./pages/About/about";

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/accomodation/:id" element={<Accomodation />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

export default App;
