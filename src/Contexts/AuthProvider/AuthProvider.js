import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider) => {

        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }


    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const emailVarify = () => {
        return sendEmailVerification(auth.currentUser)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const AuthInfo = {
        user,
        loading,
        providerLogin,
        logOut,
        updateUserProfile,
        createUser,
        setLoading,
        signIn,
        emailVarify
    }


    return (

        <AuthContext.Provider value={AuthInfo}>

            {children}

        </AuthContext.Provider>


    );
};

export default AuthProvider;
