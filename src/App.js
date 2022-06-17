import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss";
import LandingPage from './pages/LandingPage';
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Category from "./pages/Categories";
import DieselGenerators from "./pages/Generators/Diesel";

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
                  path="/contacts/"
                  element={<ContactUs />}
                />
                <Route 
                    path="/category/*"
                    element = {<Category />}
                />
                <Route
                    path="/category/generators/dieselgenerators"
                    element={<DieselGenerators />}
                />                
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;