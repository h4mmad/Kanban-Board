import {uuidv4} from './uuid.js'
import { drag } from './dragEvents.js';




export function createCard(cardValue){
    const card = document.createElement("div");
    card.classList.add('card', 'card-body','bg-opacity-25', 'mt-2');
    card.style.cursor = "move";
    card.setAttribute('draggable', 'true');
    
    card.setAttribute('id', uuidv4());
    card.addEventListener('dragstart', drag);
    
    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.textContent = cardValue;
    card.appendChild(cardTitle);
    
    return card;
}

export function paintCard(col, id, value){
    const card = document.createElement("div");
    card.classList.add('card', 'card-body','bg-opacity-25', 'mt-2');
    card.style.cursor = "move";
    card.setAttribute('draggable', 'true');
    card.setAttribute('id', id);
    card.addEventListener('dragstart', drag);
    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.textContent = value;
    card.appendChild(cardTitle);
    col.appendChild(card);
}