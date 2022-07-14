import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../Context/Context';

import './Footer.css';

const Footer = (props) => {

    let navigate = useNavigate();
    const context = useStore();

    const handleClickOpen = () => {
        context.setOpen(true);
    };

    const handleClose = () => {
        context.setOpen(false);
    }

    return (
        <div className="Footer">
            <div className="Footer-Button">
                <span className="material-icons Upload-Logo" onClick={() => { navigate("/") }}>home</span>
                <p>Hem</p>
            </div>
            <div className="Footer-Button">
                <span className="material-icons Upload-Logo" onClick={() => { handleClickOpen() }}>file_upload</span>
                <p>Ladda upp</p>
            </div>
            <div className="Footer-Button">
                <span className="material-icons Upload-Logo" onClick={() => { navigate("/highscore") }}>trending_up</span>
                <p>Topplista</p>
            </div>
        </div>
    )
}

export default Footer;