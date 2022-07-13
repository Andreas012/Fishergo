import React, { useState, useRef } from 'react';
import { auth, CreateUserProfile } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'

import './Registration.css';

const Registration = () => {

    const PasswordRef = useRef();
    const ConfirmPasswordRef = useRef();
    const EmailRef = useRef();
    const NameRef = useRef();

    let navigate = useNavigate();

    const [error, setError] = useState('');

    const validatePassword = () => {
        let isValid = true
        if (PasswordRef.current.value !== '' && ConfirmPasswordRef.current.value !== '') {
            if (PasswordRef.current.value !== ConfirmPasswordRef.current.value) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const register = e => {
        e.preventDefault()
        if (validatePassword()) {
            // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, EmailRef.current.value, PasswordRef.current.value)
                .then((res) => {
                    CreateUserProfile(NameRef.current.value, res.user.uid)
                })
                .catch(err => console.log(error))
        }
    }

    return (
        <div className="Registration">
            <form onSubmit={register} name='registration_form'>
                <p className="Title">Registrera konto</p>
                <label>
                    <input ref={NameRef} type="text" name="name" placeholder="Name" />
                </label>
                <label>
                    <input ref={EmailRef} type="text" name="email" placeholder="Email" />
                </label>
                <label>
                    <input ref={PasswordRef} type="password" name="password" placeholder="Password" />
                </label>
                <label>
                    <input ref={ConfirmPasswordRef} type="password" name="confirmPassword" placeholder="Confirm Password" />
                </label>
                <button className="Create-Account-Button" type="submit">Skapa konto</button>
                <h5>Har du redan ett konto?</h5>
                <button className="Login-Button" onClick={() => { navigate("/login") }}>Logga in</button>
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

export default Registration;