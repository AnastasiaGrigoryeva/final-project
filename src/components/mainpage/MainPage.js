import React from "react";
import FirstPage from '../firstpage/Firstmainpage';
import { Routes, Route } from "react-router-dom";
import RegForm from '../reg/RegForm.js'
import LoginForm from "../login/LoginForm.js";
//import Header from './component/header/Header';
//import Footer from './component/footer/Footer';



function MainPage() {

    return (
        <>
        
        
        <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegForm />} />
        </Routes>
        </>

         
)}

export default MainPage;