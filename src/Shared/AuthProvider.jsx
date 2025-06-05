import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.init";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const AuthProvider = ({ children }) => {
    const axiosPublic = UseAxiosPublic()
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    const userUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const signInWithGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data.token)
                        localStorage.setItem("Access-Token", res.data.token)

                    })
            }
            else {
                localStorage.removeItem("Access-Token")
            }
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        signInWithGoogle,
        userUpdate,
        createUser,
        userLogIn,
        userLogOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;