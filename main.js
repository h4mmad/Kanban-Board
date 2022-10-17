// import { deleteDiv } from "./deleteDiv.js";
import { inputHandler } from "./inputHandler.js";
import { todosCol } from "./todos.js";
import {doingCol} from "./doing.js";
import {doneCol} from "./done.js";

doingCol;
doneCol;


inputHandler(todosCol);


const deleteDiv = document.getElementById('delete-div');
const columnContainer = document.getElementById('column-container');

columnContainer.addEventListener('drag', (ev)=>{
  deleteDiv.classList.add('visible');
  deleteDiv.classList.remove('invisible');
})
columnContainer.addEventListener('dragend', (ev)=>{
  deleteDiv.classList.add('invisible');
  deleteDiv.classList.remove('visible');
})

























