import { options } from "./mutationOptions.js";
import { drop, allowDrop, dragEnter, dragLeave } from "./dragEvents.js";

export const todosCol = document.getElementById("todos");
todosCol.addEventListener('drop', drop);
todosCol.addEventListener('dragover', allowDrop);
todosCol.addEventListener('dragenter', dragEnter);
todosCol.addEventListener('dragleave', dragLeave);


function callback(mutationList) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length === 1){

            console.log('A node is added');
            console.log(mutation.addedNodes[0].id);

            const node = mutation.addedNodes[0];
            node.classList.add('bg-info');
            node.setAttribute('data-column-type', 'todos');
            
          }
          else{
            const node = mutation.removedNodes[0];
            node.classList.remove('bg-info');
            console.log('Node removed');
          }
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
}




const observer = new MutationObserver(callback);
observer.observe(todosCol, options);