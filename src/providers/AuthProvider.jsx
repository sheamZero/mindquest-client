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


    const data = {
        users,
        registerUser,
        loginWithGoogle,
        loginWithGithub,
        loginWithEmailPass,
        logoutUser
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User = ", currentUser);
            setUsers(currentUser);
            const email = currentUser?.email;
            const user = { email }

            // send user for token
            fetch("http://localhost:5000/jwt", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(user),
            })
                .then(res => res.json())
                .then(data => console.log(data))

            setIsLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;