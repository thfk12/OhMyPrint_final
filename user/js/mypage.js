let myUserName = document.querySelector('.user-name');
let savedName = sessionStorage.getItem('userName');

myUserName.textContent = savedName;

//마이페이지에서 마이페이지를 누르면 새로고침
