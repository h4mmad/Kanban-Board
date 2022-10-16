import {deleteDiv} from './deleteDiv.js';
import { arrayRemove, arrayUnion,updateDoc} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';
import { docRef } from './config.js';

export function changeColumn(ev){
    if (ev.currentTarget.parentNode.id === 'todos'){
      ev.currentTarget.classList.add('bg-info');
      ev.currentTarget.classList.remove('bg-warning');
      ev.currentTarget.classList.remove('bg-success');
      ev.currentTarget.setAttribute('data-column-type', 'todos');

      updateDoc(docRef, {
        todos: arrayUnion({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      updateDoc(docRef, {
        doing: arrayRemove({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      updateDoc(docRef, {
        done: arrayRemove({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
    }
    if (ev.currentTarget.parentNode.id === 'doing'){
      ev.currentTarget.classList.add('bg-warning');
      ev.currentTarget.classList.remove('bg-info');
      ev.currentTarget.classList.remove('bg-success');
      ev.currentTarget.setAttribute('data-column-type', 'doing');

      updateDoc(docRef, {
        doing: arrayUnion({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      updateDoc(docRef, {
        todos: arrayRemove({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      updateDoc(docRef, {
        done: arrayRemove({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
    }
    if (ev.currentTarget.parentNode.id === 'done'){
      ev.currentTarget.classList.add('bg-success');
      ev.currentTarget.classList.remove('bg-info');
      ev.currentTarget.classList.remove('bg-warning');
      ev.currentTarget.setAttribute('data-column-type', 'done');


      updateDoc(docRef, {
        done: arrayUnion({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      updateDoc(docRef, {
        doing: arrayRemove({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      updateDoc(docRef, {
        todos: arrayRemove({cardId : ev.currentTarget.id , value: ev.currentTarget.innerText})
      });
      
    }
    deleteDiv.classList.add('invisible');
}

