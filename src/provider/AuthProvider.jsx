import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    // console.log(loading, user);

    // Create User Function 
    const createUser = (email, password)=> {
        setLoading(true);
        return(
            createUserWithEmailAndPassword(auth, email, password)
        );
    };

    // LogOut Function
    const logOut =()=> {

        return signOut(auth);
    }

const singnIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); 
};



    useEffect(()=> {
    const unsubscribe =   onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    }, []);


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        singnIn,
        loading,
        setLoading,
    };






    return (
       <AuthContext value={authData}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;