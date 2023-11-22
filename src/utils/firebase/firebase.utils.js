// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { unstable_useViewTransitionState } from "react-router-dom";

import config from '../../config.json';

const firebaseConfig = config.firebase;

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshoot = await getDoc(userDocRef);
    if(!userSnapshoot.exists()){
        const {displayName, email} = userAuth;
        const createdDate = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdDate});
        }
        catch(error){
            console.log('Error creating the user', error.message);
        }
        
    }
    return userDocRef;

}