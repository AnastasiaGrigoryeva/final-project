import React from "react";
import {Link } from "react-router-dom";
import "./firstpage.css"


function FirstPage() {

    return (
    <>
        <div className="container">
            <div className="wrapper login">
            <main>
            <div className="box">
                <div>
                <div className="maintext">
                Add new case View statistics Join us
                </div>
                
                <ul>
                    <li>
                        <Link to='login' type="button" className="btn login">login</Link>
                    </li>
                    <li>
                        <Link to="registration" type="button" className="btn reg"   >registration</Link>
                    </li>
                </ul>
                
                </div>
                
            </div>
        </main>
            </div>
        </div>

    </>
)}

export default FirstPage;


/**
            <Routes>
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/registration" element={<RegForm/>} />
            </Routes> */