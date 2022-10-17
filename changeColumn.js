import {deleteDiv} from './deleteDiv.js';

export function changeColumn(ev){
    if (ev.currentTarget.parentNode.id === 'todos'){
      // ev.currentTarget.classList.add('bg-info');
      // ev.currentTarget.classList.remove('bg-warning');
      // ev.currentTarget.classList.remove('bg-success');
      // ev.currentTarget.setAttribute('data-column-type', 'todos');
    }
    if (ev.currentTarget.parentNode.id === 'doing'){
      // ev.currentTarget.classList.add('bg-warning');
      // ev.currentTarget.classList.remove('bg-info');
      // ev.currentTarget.classList.remove('bg-success');
      // ev.currentTarget.setAttribute('data-column-type', 'doing');

    }
    if (ev.currentTarget.parentNode.id === 'done'){
      // ev.currentTarget.classList.add('bg-success');
      // ev.currentTarget.classList.remove('bg-info');
      // ev.currentTarget.classList.remove('bg-warning');
      // ev.currentTarget.setAttribute('data-column-type', 'done');
    }
    deleteDiv.classList.add('invisible');
}

