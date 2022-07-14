import React, { } from 'react';
import { Logout } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => {

    let navigate = useNavigate();

    return (
        <div className="Footer">
            <div className="Footer-Button">
                <span className="material-icons Upload-Logo" onClick={() => { props.handleClickOpen() }}>file_upload</span>
                <p>Ladda upp</p>
            </div>
            <div className="Footer-Button">
                <span className="material-icons Upload-Logo" onClick={() => { navigate("/highscore") }}>trending_up</span>
                <p>Topplista</p>
            </div>
            <div className="Footer-Button">
                <span className="material-icons" onClick={() => { Logout() }}>logout</span>
                <p>Logga ut</p>
            </div>
        </div>
    )
}

export default Footer;