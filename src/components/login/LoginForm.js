import React, { useRef, useState, useEffect  } from "react";
import {Link, useNavigate } from "react-router-dom";
import './login.css'
//import TextInput from '../../elements/textinput'
import {SERVER, REQUESTS} from '../../elements/parms'
import { observer } from 'mobx-react-lite';

const axios = require('axios').default

function LoginForm () {

    const EMAIL_REG = new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/)

    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REG.test(email));
    }, [email])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])



    const handleSubmit =  async (e) => {
        e.preventDefault(); 
        const v1 = EMAIL_REG.test(email);
        if (!v1) {
            setErrMsg("Invalid Entry");
            return;
            axios.post(SERVER + REQUESTS.POST_SIGN_IN , 
                {
                    email: email,
                    password: password
                },
                {
                    headers: {
                         'Content-Type': 'application/json' 
                        }  
                }
            ).then((response) => {console.log(response)})
        .catch((error) => {console.error(error)} )
        }
        }

        console.log(email)
        console.log(password)
    return( <>
        <div className="form-container">
        <div className="wrapper-form">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="form login"  onSubmit={handleSubmit} >
                <h2 className="title-name">login</h2>
                <label className="label" htmlFor="email">email</label>
                <input className="input email" 
                          id="email"  
                           type="email" 
                           ref={userRef}
                           value={email} 
                            autoComplete="off"
                            required
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)} 
                    />

                <label className="label" htmlFor="password">password</label>
                <input className="input password"
                        type="password" 
                        value={password}
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                <div className="btn-container">
                    <Link to='/' >
                        <button  type="back" className="btn back">back</button>
                    </Link>
                    <Link to="home" email={email} >
                        <button disabled={!validEmail ? true : false} type="submit" className="btn login-page">sing in</button>
                    </Link>
                </div>
            </form>
        </div>
        </div>
        </>
    )

}

export default observer(LoginForm);

//<label className="label" htmlFor="email">email</label>
//<input className="input email" 
//      id="email"  
//        type="email" 
//        ref={userRef}
//        value={email} 
//        autoComplete="off"
//        required
//        placeholder="email"
//        onChange={(e) => setEmail(e.target.value)}
//        aria-describedby="uidnote"
//        onFocus={() => setEmailFocus(true)}
//        onBlur={() => setEmailFocus(false)} 
///>