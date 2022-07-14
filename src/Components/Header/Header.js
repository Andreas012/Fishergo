import { Logout } from '../../Firebase/Firebase';
import { useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {

    const location = useLocation()

    if (location.pathname !== '/login' && location.pathname !== '/register') {
        return (
            <div className="Header">
                <h1>Fishergo</h1>
                <div className="Footer-Button">
                    <span className="material-icons Upload-Logo" onClick={() => { Logout() }}>logout</span>
                </div>
            </div>
        )
    }
}

export default Header;