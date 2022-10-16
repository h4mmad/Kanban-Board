import {uuidv4} from "./uuid.js";
import { deleteDiv } from "./deleteDiv.js";
import { changeColumn } from "./changeColumn.js";
import { getFirestore, updateDoc, doc,arrayUnion, getDoc, setDoc} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';
import  {docRef} from './config.js' 



const todoCol = document.getElementById("todos");
todoCol.addEventListener('drop', drop);
todoCol.addEventListener('dragover', allowDrop);
todoCol.addEventListener('dragenter', dragEnter);
todoCol.addEventListener('dragleave', dragLeave);

// const callback = (mutationList, observer) => {
//   for (const mutation of mutationList) {
//     if (mutation.type === 'childList') {
//       if (mutation.addedNodes.length === 1){
//         console.log('A node is added');
//         console.log(mutation.addedNodes[0].id)
//       }
//       else{
//         console.log('Node removed');
//       }
//     } else if (mutation.type === 'attributes') {
//       console.log(`The ${mutation.attributeName} attribute was modified.`);
//     }
//   }
// };
// const options = {
//     childList: true,
//     attributes: true,
//     characterData: true,
// }
// let observer = new MutationObserver(callback);
// observer.observe(todoCol, options);



const doingCol = document.getElementById("doing");
doingCol.addEventListener('drop', drop);
doingCol.addEventListener('dragover', allowDrop);
doingCol.addEventListener('dragenter', dragEnter);
doingCol.addEventListener('dragleave', dragLeave);


const doneCol = document.getElementById("done");
doneCol.addEventListener('drop', drop);
doneCol.addEventListener('dragover', allowDrop);
doneCol.addEventListener('dragenter', dragEnter);
doneCol.addEventListener('dragleave', dragLeave);



function dragEnter(ev){
  if (ev.target.id === 'todos'){
    ev.target.style.border = '2px rgb(13,202,240) dashed';
    ev.target.style.borderRadius = '10px';
  }
  if (ev.target.id === 'doing'){
    ev.target.style.border = '2px rgb(255,193,7) dashed';
    ev.target.style.borderRadius = '10px';
  }
  if (ev.target.id === 'done'){
    ev.target.style.border = '2px rgb(25,135,84) dashed';
    ev.target.style.borderRadius = '10px';
  }
}

function dragLeave(ev){
  ev.target.style.border = '';
}





function inputHandler(){
  const inputBox = document.getElementById("inputBox");
  const form = document.getElementById("form1");
  let task = "";

  inputBox.addEventListener('input', (event)=>{
    event.preventDefault();
    task = event.target.value;
    task = task.trim();
  })

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (task != ""){
      todoCol.appendChild(createCard(task));
      inputBox.value = '';
      task = '';
    }
  })
}

function createCard(text){
    const cardBody = document.createElement("div");
    cardBody.classList.add('card', 'card-body', 'bg-info' ,'bg-opacity-25', 'mt-2');
    cardBody.style.cursor = "move";
    cardBody.setAttribute('draggable', 'true');

    const cardId = uuidv4();
    cardBody.setAttribute('id', cardId);
    cardBody.addEventListener('dragstart', drag);
    cardBody.addEventListener('dragend', changeColumn);
    cardBody.setAttribute('data-column-type', 'todos');
    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = text;
    cardBody.appendChild(cardTitle);
    
    
    updateDoc(docRef, {
      todos: arrayUnion({cardId : cardId, value: text})
    });
    
    return cardBody;
}

function allowDrop(ev) {
  if (ev.target.id === 'todos' || ev.target.id  === 'doing' || ev.target.id === 'done'){
    ev.stopPropagation();
    ev.preventDefault();
  }
}

function drag(ev) {
  ev.stopPropagation();
  ev.dataTransfer.setData("text", ev.target.id);
  deleteDiv.classList.remove('invisible');
  deleteDiv.classList.add('visible');
}

function drop(ev) {
  ev.stopPropagation();
  ev.preventDefault();
  ev.target.style.border = "";
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}




// function clockHandler(){
//   const d = new Date();
//   clock.innerHTML = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// }

// setInterval(clockHandler, 1000);


inputHandler();




