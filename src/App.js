import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss";
import LandingPage from './pages/LandingPage';
import AboutPage from "./pages/AboutPage";

export function App(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/"
                    element={<LandingPage />}
                />
                <Route 
                    path="/about/"
                    element={<AboutPage />}
                />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;