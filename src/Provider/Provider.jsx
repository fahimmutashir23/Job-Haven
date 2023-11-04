import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const Provider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true);


     const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }

     const logout = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        setLoading()
        return updateProfile(auth.currentUser , profile)
    }

     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
     }, [])

     const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "emerald")

     useEffect(()=> {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
     }, [theme])

    const authInfo = {user, loading, signUp, signIn, logout, updateUserProfile, setTheme};
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};
export default Provider;