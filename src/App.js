import React, { useEffect, useState } from 'react';

import './App.css';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';

import { AuthProvider } from './Context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/Firebase';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <HashRouter>
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
