import {app} from './config.js'
import {getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js'
import { db } from './config.js';
import {doc, getDoc, setDoc} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';
import { paintCard } from './createCard.js';

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
      auth.signOut();
    };
});



async function signIn(auth, provider){
    try{
        const userCred = await signInWithPopup(auth, provider);
        console.log('User signed in');
        console.log(userCred);
    }
    catch(error){
      console.log(error);
      // ...
    }
}



const doneCol = document.getElementById('done');
const todoCol = document.getElementById('todos');
const doingCol = document.getElementById('doing');


export let docRef = ""

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      profilePic.setAttribute('src', user.photoURL);
      greetingText.textContent = 'Signed in';
      console.log(uid);
      docRef = doc(db, "users", uid);



      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const todo = docSnap.data().todos;
        const doing = docSnap.data().doing;
        const done = docSnap.data().done;
        
         todo.forEach(element => {
          paintCard(todoCol, element.id, element.value);
         });
         doing.forEach(element => {
          paintCard(doingCol, element.id, element.value);
         });
         done.forEach(element => {
          paintCard(doneCol, element.id, element.value);
         });
         

      } else {
        // doc.data() will be undefined in this case
        await setDoc(docRef, {
          doing: [],
          done: [],
          todos: []
        });
        // console.log("No such document!");
      }


      
      // ...
    } else {
      profilePic.setAttribute('src', "");
      greetingText.textContent = 'Signed out';
      
      // User is signed out
      // ...
    }
  });


