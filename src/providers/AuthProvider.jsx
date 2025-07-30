import { createContext } from "react";
import auth from '../../src/firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // sign up user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const data = {
        registerUser,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;