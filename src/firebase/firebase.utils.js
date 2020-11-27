import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig =  {
    apiKey: "AIzaSyApDxOOKqR_7wjuhyiPFFrCPyrSXL8iaoI",
    authDomain: "g-shop-project.firebaseapp.com",
    databaseURL: "https://g-shop-project.firebaseio.com",
    projectId: "g-shop-project",
    storageBucket: "g-shop-project.appspot.com",
    messagingSenderId: "725661496054",
    appId: "1:725661496054:web:975534751670d29ac5b2d7"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email, photoURL} = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName, email, createdAt, photoURL, ...additionalData    
            })
        } catch(err){
            console.log('Error creating user ===>', err.message)
        }
    } 

    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  