import { createCard } from "./createCard.js";

export function inputHandler(column){
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
        column.appendChild(createCard(task));
        inputBox.value = '';
        task = '';
      }
    })
  }