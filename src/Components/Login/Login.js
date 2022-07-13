import React, { useEffect, useRef, useState } from 'react';
import { auth, login } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from '../Loading/Loading';

import './Login.css';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [user, loading] = useAuthState(auth);

    let navigate = useNavigate();

    useEffect(() => {
        if (user)
            navigate("/");

        // eslint-disable-next-line
    }, [user, loading]);

    const EmailRef = useRef();
    const PasswordRef = useRef();

    if (!loading) {
        return (
            <div className="Login">
                <form onSubmit={async (e) => {
                    await login(e, EmailRef.current.value, PasswordRef.current.value).then((result) => {
                        if (result === true) {
                            navigate("/");
                        }
                        else {
                            switch (result) {
                                case "auth/user-not-found":
                                    setErrorMessage("User not found");
                                    break;
                                case "auth/wrong-password":
                                    setErrorMessage("Wrong password");
                                    break;
                                case "auth/invalid-email":
                                    setErrorMessage("Invalid email");
                                    break;
                                default:
                                    setErrorMessage("Unknown error");
                                    break;
                            }
                        }
                    })
                }} name='login_form'>
                    <p className="Title">Fishergo</p>
                    <label>
                        <input ref={EmailRef} type="text" name="email" placeholder="Email" />
                    </label>
                    <label>
                        <input ref={PasswordRef} type="password" name="password" placeholder="Password" />
                    </label>
                    <button className="Login-Button" type="submit">Logga in</button>
                    {errorMessage && <p className='Error'>{errorMessage}</p>}
                    {/* // eslint-disable-next-line */}
                    <button className="Create-Account" onClick={() => { navigate("/register") }}>Skapa konto</button>
                </form>
                <svg className="waves"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        )
    }
    else {
        return (
            <Loading />
        )
    }
}

export default Login;