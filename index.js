
function renderBooks(books) {
  
  console.log(books); 
}


function fetchBooks() {
  
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json)); 
}


document.addEventListener("DOMContentLoaded", fetchBooks);
