let savedName = sessionStorage.getItem('userName');
let nameSpan = document.querySelector('.userName');

nameSpan.textContent = savedName;
