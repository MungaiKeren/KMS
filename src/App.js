import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss";
import LandingPage from './pages/LandingPage';
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

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
                <Route 
                  path="/services/"
                  element={<Services />}
                />
                <Route 
                  path="/contact/"
                  element={<ContactUs />}
                />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;