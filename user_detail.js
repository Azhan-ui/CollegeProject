import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAcHQSDbMN48A32RIrj2inn8wL00iscEak",
    authDomain: "login-form-2fe7d.firebaseapp.com",
    projectId: "login-form-2fe7d",
    storageBucket: "login-form-2fe7d.appspot.com",
    messagingSenderId: "546216190400",
    appId: "1:546216190400:web:c1302419bc6459b0bfa825"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

 //   const logoutButton=document.getElementById('logout');

 //   logoutButton.addEventListener('click',()=>{
 //     localStorage.removeItem('loggedInUserId');
 //     signOut(auth)
 //     .then(()=>{
 //         window.location.href='index.html';
 //     })
 //     .catch((error)=>{
 //         console.error('Error Signing out:', error);
 //    })
 // })