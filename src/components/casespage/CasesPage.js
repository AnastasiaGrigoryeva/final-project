import {React, useState} from "react";
import './casespage.css'
import { observer } from 'mobx-react-lite';
import {NavLink, Outlet} from 'react-router-dom';


function CasesPage() {

    return (
    <>
        <div className="container">  
            <div>
                <div className="wrapper-nav">
                <div >
                    <nav>
                        <NavLink to="/login/home" type="button" className="btn reg-form" activeClassName="btm-focused"  >cases</NavLink>
                        <NavLink to="addcase" type="button" className="btn reg-form" activeClassName="btm-focused">add case</NavLink>
                        <NavLink to="people" type="button" className="btn reg-form" activeClassName="btm-focused">people</NavLink>
                        <NavLink to='/login'>
                        <input type="button" className="btn logout" value='log out' />
                        </NavLink>
                    </nav>
                    
                </div>
                <div>
                   
                    <p className="user-name" >email</p>
                </div>
                </div>

                <Outlet />
            </div>
        </div>

    </>
)}

export default CasesPage;