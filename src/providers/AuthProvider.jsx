import { createContext, useEffect, useState } from "react";
import auth from '../../src/firebase/firebase.config';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // sign up user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email and password
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // github sign in
    const githubProvider = new GithubAuthProvider();
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // logout
    const logoutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User = ", currentUser);
            setUsers(currentUser);
            setIsLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const data = {
        users,
        registerUser,
        loginWithGoogle,
        loginWithGithub,
        loginWithEmailPass,
        logoutUser
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;