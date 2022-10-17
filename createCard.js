import {uuidv4} from './uuid.js'
import { changeColumn } from "./changeColumn.js";
import { drag } from './dragEvents.js';




export function createCard(cardValue){
    const card = document.createElement("div");
    // card.classList.add('card', 'card-body', 'bg-info' ,'bg-opacity-25', 'mt-2');
    card.style.cursor = "move";
    card.setAttribute('draggable', 'true');

    
    card.setAttribute('id', uuidv4());
    card.addEventListener('dragstart', drag);
    card.addEventListener('dragend', changeColumn);
    // card.setAttribute('data-column-type', 'todos');

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = cardValue;
    card.appendChild(cardTitle);
    
    return card;
}