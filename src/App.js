import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss";
import LandingPage from './pages/LandingPage';
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Category from "./pages/Categories";
import DieselGenerators from "./pages/Generators/Diesel";
import PetrolGenerators from "./pages/Generators/Petrol";
import GasolineEngines from "./pages/Engines/Gasoline";
import Electric from "./pages/PWasher/Electric";
import PetrolEngines from "./pages/Engines/petrol";
import NotFound from "./pages/NotFound";

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
                  path="/contactus/"
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
                <Route
                    path="/category/generators/petrolgenerators"
                    element={<PetrolGenerators />}
                />  
                <Route
                    path="/category/engines/gasoline"
                    element={<GasolineEngines/>}
                />  
                <Route 
                    path="/category/engines/petrol"
                    element={<PetrolEngines />}
                />   
                <Route 
                    path="/category/pressurewasher/electric"
                    element={<Electric />}
                />         
                <Route 
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;