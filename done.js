import { options } from "./mutationOptions.js";
import { drop, allowDrop, dragEnter, dragLeave } from "./dragEvents.js";
import { docRef } from "./auth.js";
import {arrayRemove, updateDoc,arrayUnion} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';



export const doneCol = document.getElementById("done");
doneCol.addEventListener('drop', drop);
doneCol.addEventListener('dragover', allowDrop);
doneCol.addEventListener('dragenter', dragEnter);
doneCol.addEventListener('dragleave', dragLeave);

async function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length === 1){

            const node = mutation.addedNodes[0];
            node.classList.add('bg-success');
            node.setAttribute('data-column-type', 'done');

            if (docRef != ""){
              await updateDoc(docRef, {
                done: arrayUnion({id : node.id, value: node.textContent})
              })
            }
          }
          else{
            const node = mutation.removedNodes[0];
            node.classList.remove('bg-success');
            
            if (docRef != ""){
              await updateDoc(docRef, {
                done: arrayRemove({id : node.id, value: node.textContent})
              })
            }
          }
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
}




const observer = new MutationObserver(callback);
observer.observe(doneCol, options);