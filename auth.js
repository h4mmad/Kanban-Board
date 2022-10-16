import {app} from './config.js'
import {getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js'


const provider = new GoogleAuthProvider(); 

const auth = getAuth(app);

const signInButton = document.getElementById('sign-in-button');
const profilePic = document.getElementById('profile-pic');
const greetingText = document.getElementById('greeting');

signInButton.addEventListener('click', ()=>{
    if (auth.currentUser == null){
        signIn(auth, provider);
    }
    else{
        signOut();
    };
});



async function signIn(auth, provider){
    try{
        const userCred = await signInWithPopup(auth, provider);
        console.log('User signed in');
    }
    catch(error){
      console.log(error);
      // ...
    }
}

function signOut(){
    auth.signOut();
    console.log('User signed out');
}

export let sharedUid = "";

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User is signed in---->');
      profilePic.setAttribute('src', user.photoURL);
      greetingText.textContent = 'Signed in';
      console.log(uid);
      sharedUid = uid;
      // ...
    } else {
      profilePic.setAttribute('src', "");
      greetingText.textContent = 'Signed out';
      // User is signed out
      // ...
    }
  });

