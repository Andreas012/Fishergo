import React, { } from 'react';
import { Logout } from '../../Firebase/Firebase';

import './Footer.css';

const Footer = (props) => {

    return (
        <div className="Footer">
            <div className="Footer-Button">
                <span className="material-symbols-outlined Upload-Logo" onClick={() => { props.handleClickOpen() }}>file_upload</span>
                <p>Ladda upp</p>
            </div>
            <div className="Footer-Button">
                <span className="material-symbols-outlined Upload-Logo">trending_up</span>
                <p>Topplista</p>
            </div>
            <div className="Footer-Button">
                <span className="material-symbols-outlined" onClick={() => { Logout() }}>logout</span>
                <p>Logga ut</p>
            </div>
        </div>
    )
}

export default Footer;