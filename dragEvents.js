import { deleteDiv } from "./deleteDiv.js";


//this function will draw a dashed line around the column
export function dragEnter(ev){
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
  
export  function dragLeave(ev){
    ev.target.style.border = '';
  }
  
  
  
export function allowDrop(ev) {
    if (ev.target.id === 'todos' || ev.target.id  === 'doing' || ev.target.id === 'done'){
      ev.stopPropagation();
      ev.preventDefault();
    }
  }
  
export function drag(ev) {
    ev.stopPropagation();
    ev.dataTransfer.setData("text", ev.target.id);
    deleteDiv.classList.remove('invisible');
    deleteDiv.classList.add('visible');
  }
  
export function drop(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }