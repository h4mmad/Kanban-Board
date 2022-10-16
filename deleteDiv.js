import { changeColumn } from "./changeColumn.js";
import  {docRef} from './config.js';
import { arrayRemove, updateDoc} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';


export const deleteDiv = document.getElementById('delete-div');
deleteDiv.addEventListener('drop', deleteDrop);
deleteDiv.addEventListener('dragover', allowDeleteDrop);
deleteDiv.addEventListener('dragleave', dragLeaveDeleteDiv);


function dragLeaveDeleteDiv(ev){
  deleteDiv.style.border = "";
}

function allowDeleteDrop(ev){
  ev.preventDefault();
  deleteDiv.style.border = '3px dotted red';
}


function deleteDrop(ev){
  ev.preventDefault();
  let cardId = ev.dataTransfer.getData("text");
  const toDelete = document.getElementById(cardId);
  toDelete.removeEventListener('dragend', changeColumn);
  deleteDiv.classList.add('invisible');
  deleteDiv.classList.remove('visible');
  deleteDiv.style.border = "";

  updateDoc(docRef, {
    todos: arrayRemove({cardId : cardId, value: toDelete.innerText}),
    doing: arrayRemove({cardId : cardId, value: toDelete.innerText}),
    done: arrayRemove({cardId : cardId, value: toDelete.innerText})
  });


  toDelete.remove();
  return id;
}

