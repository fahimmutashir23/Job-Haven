import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxios from "../Hooks/useAxios";



export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()

const Provider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true);
     const axios = useAxios()


     const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }

     const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
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
            const loggedUser = currentUser?.email || user?.email;
            const userEmail = {email: loggedUser}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post("/jwt", userEmail)
                .then(() => {
                    
                })
            } else{
                axios.post('/logOut').then(() => {})
            }
        })
        return () => {
            unsubscribe()
        }
     }, [axios, user])
     
     
     const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "emerald")

     useEffect(()=> {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
     }, [theme])


    const authInfo = {user, loading, signUp, signIn, googleSignIn, logout, updateUserProfile, setTheme};

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