import { validateData, valiDatePhone, hasNumber, hasKorean } from '/support/js/input.js';

let savedId = sessionStorage.getItem('userId');
console.log(savedId);
let savedPw = sessionStorage.getItem('userPw');
let loginId = document.querySelector('#id');
let loginPw = document.querySelector('#password');
let loginBtn = document.querySelector('.log-in-btn');
let loginBox = document.querySelectorAll('.log-box input');

console.log(loginBtn);

//input 한글 입력 여부 확인
validateData(loginId, hasKorean, '한글');

let loginIdValue = loginId.value.trim();
let loginPwValue = loginPw.value.trim();

function disabledCheck() {
  let loginIdValue = loginId.value.trim();
  let loginPwValue = loginPw.value.trim();

  if (loginIdValue && loginPwValue) {
    loginBtn.disabled = false;
    console.log('활성화됨');
  } else {
    loginBtn.disabled = true;
    console.log('비활성화됨');
  }
}

loginBox.forEach((el) => {
  el.addEventListener('input', () => {
    disabledCheck();
  });
});

disabledCheck();

//savedId랑 #id의 value값이 같고 곱연산자 savedPw랑 #pw의 value값이 같으면 submit이 되고 index로 넘어가 -> header의 login이 마이페이지로 바뀌고 마이페이지 이름 변경 끝
loginBtn.addEventListener('click', (e) => {
  let loginIdValue = loginId.value.trim();
  let loginPwValue = loginPw.value.trim();

  // submit이면 e.preventDefault 꼭 써야함
  e.preventDefault();

  if (!loginIdValue) {
    alert('아이디를 입력해주세요.');
  } else if (!loginPwValue) {
    alert('비밀번호를 입력해주세요.');
  } else if (savedId == loginIdValue && savedPw == loginPwValue) {
    window.location.href = '/index.html';
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    window.location.reload();
  }
  sessionStorage.setItem('logIned', 'true');
});
