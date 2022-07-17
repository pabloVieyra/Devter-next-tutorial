// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBucHUkQ41imfQRJisuqyV7pdO-dzl0-sk",
  authDomain: "devter-5d5fb.firebaseapp.com",
  projectId: "devter-5d5fb",
  storageBucket: "devter-5d5fb.appspot.com",
  messagingSenderId: "350559113631",
  appId: "1:350559113631:web:ac331fba44443b18f66daa",
  measurementId: "G-9HY6CXZS37"
};


// Initialize Firebase
!getApps().length &&
    initializeApp(firebaseConfig);

const mapUserFromFireBaseAuthToUser = (user) =>{
    
    const {displayName, email, photoURL } = user

    return{
        avatar: photoURL,
        displayName:displayName,
        url: email
    }
}

export const onAuthStateChanged = (onChange) =>{
    const auth = getAuth();
    return auth.onAuthStateChanged(user =>{
        const normalizedUser = mapUserFromFireBaseAuthToUser(user)
        onChange(normalizedUser)
    })
}


export const loginWithGitHub = () =>{
    const githubProvider = new GithubAuthProvider();
    githubProvider.setCustomParameters(firebaseConfig);
    const auth = getAuth();
    return signInWithPopup(auth, githubProvider)

}

