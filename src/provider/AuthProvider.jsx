/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../config/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle =(Provider) =>{
        setLoading(true)
        new GoogleAuthProvider()
       return signInWithPopup(auth, Provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // jwt token jenerate 
            if(currentUser){
                // get token and store client 
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                    .then(res =>{
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
           
            else{
                //TODO: remove token (if token stored in the client side Local storage , caching , in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
           
        });
        return () => {
           return unSubscribe();
            
        }
    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        signInGoogle,
        createUser,
        logOut,
        signIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;