import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from '../../../firebase/firebase.config';

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const [user,setuser] = useState(null);
    const [loading,setLoading] = useState(true);

    
     // go register 
     const createUser = (email,password) => {
         setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
     }

     //login 
     const logIn = (email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const singOut = () =>{
        setLoading(true)
        return signOut(auth)
     }

     useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
            setuser(currentUser);
            setLoading(false)

        })
        return () =>{ unSubscribe(); }
     })

    const authInfo = {
        user,
        logIn,
        singOut,
        createUser,
        loading

    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;