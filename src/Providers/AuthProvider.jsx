/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/firebase.config';
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
            if (currentUser) {

                axios.post('https://car-doctor-server-one-rosy.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {

                        console.log(res.data)

                    })

            }
            else {

                axios.post('https://car-doctor-server-one-rosy.vercel.app/logout', loggedUser, { withCredentials: true })
                .then(res => {

                    console.log(res.data)

                })

            }
        })

        return () => {


            return unsubscribe();

        }

    }, [])

    const authInfo = {

        user,
        loading,
        createUser,
        signIn,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;