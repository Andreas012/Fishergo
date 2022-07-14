import React, { useEffect, useState } from 'react';

import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Highscore from './Components/Highscore/Highscore';
import Header from './Components/Header/Header';
import UploadDialog from './Components/UploadDialog/UploadDialog';
import Footer from './Components/Footer/Footer';

import { AuthProvider } from './Context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/Firebase';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useStore } from './Context/Context';

import './App.css';

function App() {

  const context = useStore();

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <HashRouter>
      <AuthProvider value={{ currentUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<PrivateRoute />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/highscore" element={<Highscore />} />
        </Routes>
        <Footer />
        <UploadDialog open={context.open} />
      </AuthProvider>
    </HashRouter>

  );
}

export default App;
