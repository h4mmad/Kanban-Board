export const deleteDiv = document.getElementById('delete-div');
deleteDiv.addEventListener('drop', deleteDrop);
deleteDiv.addEventListener('dragover', allowDeleteDrop);

function allowDeleteDrop(ev){
  ev.preventDefault();
}


function deleteDrop(ev){
  ev.preventDefault();
  const cardId = ev.dataTransfer.getData("text");
  const toDelete = document.getElementById(cardId);
  toDelete.remove();

  deleteDiv.classList.remove('visible');
  deleteDiv.classList.add('invisible');
  return cardId;
}

