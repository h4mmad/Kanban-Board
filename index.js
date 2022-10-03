const $ = (x) => {
    return document.getElementById(x);
}

const $create = (x) => {
    return document.createElement(x);
}

const todoCol = $("todo");
const doingCol = $("doing");
const doneCol = $("done");

function form(){
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
    const card = $create("div");
    card.classList.add('card', 'mt-2');
    card.style.width = "auto";

    const cardBody = $create("div");
    cardBody.classList.add('card-body', 'bg-info' ,'bg-opacity-25');

    const cardTitle = $create("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = text;

    const button = $create("button");
    button.classList.add('btn', 'btn-primary', 'btn-sm');
    button.textContent = "Move";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(button);
    card.appendChild(cardBody);

    return card;
}


form();




