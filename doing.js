import { options } from "./mutationOptions.js";
import { drop, allowDrop, dragEnter, dragLeave } from "./dragEvents.js";


export const doingCol = document.getElementById("doing");
doingCol.addEventListener('drop', drop);
doingCol.addEventListener('dragover', allowDrop);
doingCol.addEventListener('dragenter', dragEnter);
doingCol.addEventListener('dragleave', dragLeave);


function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length === 1){

            console.log('A node is added');
            console.log(mutation.addedNodes[0].id)

            const node = mutation.addedNodes[0];
            node.classList.add('bg-warning');
            node.setAttribute('data-column-type', 'doing');
          }
          else{
            const node = mutation.removedNodes[0];
            node.classList.remove('bg-warning');
            console.log('Node removed');
          }
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
}




const observer = new MutationObserver(callback);
observer.observe(doingCol, options);