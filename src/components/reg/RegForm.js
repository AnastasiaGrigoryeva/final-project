import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './reg.css'

const axios = require('axios').default

function RegForm () {
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        console.log('email:', email);
        console.log('message:', password);
    }

    return <>
        <div className="form-container">
            <div className="wrapper-form reg">
                <form className="form reg" onSubmit={handleSubmit} >
                <h2 className="title-name">registration</h2>
                <label className="label">email</label>
                <input className="input email" 
                        id="email"  
                        type="email" 
                        value={email} 
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)} />
                <label className="label">password</label>
                <input className="input password" 
                        type="password" 
                        value={password}
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)} />
                <label className="label">first name</label>
                <input className="input first-name" 
                        type="name" 
                        value={name}
                        placeholder=" first name" 
                        onChange={(e) => setName(e.target.value)} />
                <label className="label">last name</label>
                <input className="input last-name" 
                        type="lastname" 
                        value={lastname}
                        placeholder="last name" 
                        onChange={(e) => setLastname(e.target.value)} />


                <div className="btn-container">
                    <Link to='/' >
                        <button  type="back" className="btn back">back</button>
                    </Link>
                    <Link to="home" type="button" className="btn reg-form">sing up</Link>
                </div>
                </form>
            </div>
        </div>
    </>

}

export default RegForm;