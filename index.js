import {uuidv4} from "./uuid.js";

const $ = (x) => {
    return document.getElementById(x);
}

const $create = (x) => {
    return document.createElement(x);
}

const todoCol = $("todo");
todoCol.addEventListener('drop', drop);
todoCol.addEventListener('dragover', allowDrop);


const doingCol = $("doing");
doingCol.addEventListener('drop', drop);
doingCol.addEventListener('dragover', allowDrop);

const doneCol = $("done");
doneCol.addEventListener('drop', drop);
doneCol.addEventListener('dragover', allowDrop);







function inputHandler(){
  const inputBox = $("inputBox");
  const form = $("form1");
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
    const cardBody = $create("div");
    cardBody.classList.add('card', 'card-body', 'bg-info' ,'bg-opacity-25', 'mt-2');
    cardBody.style.cursor = "move";
    cardBody.setAttribute('draggable', 'true');
    cardBody.setAttribute('id', uuidv4());
    cardBody.addEventListener('dragstart', drag);

    cardBody.addEventListener('dragend', (ev)=>{
      ev.target.classList.remove('border', 'border-dark');

      if (ev.currentTarget.parentNode.id === 'todo'){
        ev.target.classList.add('bg-info');
        ev.target.classList.remove('bg-warning');
        ev.target.classList.remove('bg-success');
        console.log(ev.target.classList);
      }
      if (ev.currentTarget.parentNode.id === 'doing'){
        ev.target.classList.add('bg-warning');
        ev.target.classList.remove('bg-info');
        ev.target.classList.remove('bg-success');
        console.log(ev.currentTarget);
      }
      if (ev.currentTarget.parentNode.id === 'done'){
        ev.target.classList.add('bg-success');
        ev.target.classList.remove('bg-info');
        ev.target.classList.remove('bg-warning');
        console.log(ev.target.classList);
      }
    })

    const cardTitle = $create("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = text;

    cardBody.appendChild(cardTitle);
  
    return cardBody;
}

function allowDrop(ev) {
  if (ev.target.id === 'todo' || ev.target.id  === 'doing' || ev.target.id === 'done'){
    ev.stopPropagation();
    ev.preventDefault();
  }
}

function drag(ev) {
  ev.stopPropagation();
  ev.target.classList.add('border', 'border-dark');
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.stopPropagation();
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}




inputHandler();




