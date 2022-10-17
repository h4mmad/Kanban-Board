import { options } from "./mutationOptions.js";
import { drop, allowDrop, dragEnter, dragLeave } from "./dragEvents.js";



export const doneCol = document.getElementById("done");
doneCol.addEventListener('drop', drop);
doneCol.addEventListener('dragover', allowDrop);
doneCol.addEventListener('dragenter', dragEnter);
doneCol.addEventListener('dragleave', dragLeave);

function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length === 1){

            console.log('A node is added');
            console.log(mutation.addedNodes[0].id)

            const node = mutation.addedNodes[0];
            node.classList.add('bg-success');
            node.setAttribute('data-column-type', 'done');
            
          }
          else{
            const node = mutation.removedNodes[0];
            node.classList.remove('bg-success');
            console.log('Node removed');
          }
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
}




const observer = new MutationObserver(callback);
observer.observe(doneCol, options);