import { options } from "./mutationOptions.js";
import { drop, allowDrop, dragEnter, dragLeave } from "./dragEvents.js";
import { docRef } from "./auth.js";
import {arrayRemove, updateDoc,arrayUnion} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';


export const doingCol = document.getElementById("doing");
doingCol.addEventListener('drop', drop);
doingCol.addEventListener('dragover', allowDrop);
doingCol.addEventListener('dragenter', dragEnter);
doingCol.addEventListener('dragleave', dragLeave);


async function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length === 1){

            const node = mutation.addedNodes[0];
            node.classList.add('bg-warning');
            node.setAttribute('data-column-type', 'doing');

            await updateDoc(docRef, {
              doing: arrayUnion({id : node.id, value: node.textContent})
            })

          }
          else{
            const node = mutation.removedNodes[0];
            node.classList.remove('bg-warning');
            
            await updateDoc(docRef, {
              doing: arrayRemove({id : node.id, value: node.textContent})
            })
          }
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
}




const observer = new MutationObserver(callback);
observer.observe(doingCol, options);