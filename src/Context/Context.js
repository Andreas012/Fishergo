import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth, GetUserProfile } from '../Firebase/Firebase';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);
export const StoreProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
        });
    }, [])

    useEffect(() => {
        const UserProfile = async () => {
            await GetUserProfile(currentUser.uid).then((user) => {
                setUserProfile(user);
            })
        }
        if (currentUser)
            UserProfile();
    }, [currentUser]);

    return (
        <Store.Provider value={{
            currentUser,
            userProfile
        }}>
            {children}
        </Store.Provider>
    );
};