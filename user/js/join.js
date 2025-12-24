import { validateData, valiDatePhone, hasNumber, hasKorean } from '/support/js/input.js';

const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const passwordError = document.getElementById('passwordError');
const passwordSuccess = document.getElementById('passwordSuccess');
const userEmail = document.querySelector('.email-local');
const userEmailDomain = document.querySelector('.email-domain');
const userPhone1 = document.querySelector('.userPhone1');
const userPhone2 = document.querySelector('.userPhone2');
const userPhone3 = document.querySelector('.userPhone3');
const ckeckAgree = document.querySelector('#agreeTerms');
const ckeckPrivacy = document.querySelector('#agreePrivacy');
let submitBtn = document.querySelector('.btn-submit');
let userInput = document.querySelector('#userName');
let userId = document.querySelector('#userId');
let userPw = document.querySelector('#password');

const form = document.querySelector('form');

// 비밀번호 확인 검증
function validatePassword() {
  if (passwordConfirm.value === '') {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'none';
    return;
  }

  if (password.value === passwordConfirm.value) {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'block';
  } else {
    passwordError.style.display = 'block';
    passwordSuccess.style.display = 'none';
  }
}

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validatePassword);

// ===== 제출 핸들러 하나로 통합
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 제출 막기

  // 브라우저 기본 유효성 검사
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // 비밀번호 확인 검사
  if (password.value !== passwordConfirm.value) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  // 필수 체크박스 확인 (만약 required가 붙어 있다면)
  const requiredCheckboxes = document.querySelectorAll('input[type="checkbox"][required]');
  for (let checkbox of requiredCheckboxes) {
    if (!checkbox.checked) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
  }

  // ===== 모든 검사 통과 → 완료 페이지로 이동
  window.location.href = '/user/join-membership-end.html';
});

//dropBox
let dropBox = document.querySelectorAll('.dropBox');
let sortList = document.querySelectorAll('.sort-list');
let emailInput = document.querySelector('.email-domain');

// dropBox 클릭 시 해당 리스트 토글
dropBox.forEach((box, id) => {
  box.addEventListener('click', () => {
    sortList[id].classList.toggle('active');
  });
});

// sort-list 안 a 클릭 시 dropBox 텍스트 변경
sortList.forEach((list, id) => {
  let links = list.querySelectorAll('a');
  let box = dropBox[id];

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      let name = link.textContent;

      box.textContent = name;

      let domain = '';
      if (name == 'hanmail') {
        domain = '.net';
      } else if (name == 'kakao' || name == 'google' || name == 'naver') {
        domain = '.com';
      }

      if (emailInput && domain) {
        emailInput.value = name + domain;
      }

      list.classList.remove('active');
    });
  });
});

//아이디저장

submitBtn.addEventListener('click', (e) => {
  let name = userInput.value.trim();
  let uId = userId.value.trim();
  let uPw = userPw.value.trim();
  // 하나의 키에 하나의 값만 저장가능 중복걱정 ㄴㄴ
  sessionStorage.setItem('userName', name);
  sessionStorage.setItem('userId', uId);
  sessionStorage.setItem('userPw', uPw);
});

function disabledChecked() {
  const valueId = userId.value.trim() !== '';
  const valuePassword = password.value.trim() !== '';
  const valuePasswordCF = passwordConfirm.value.trim() !== '';
  const valueName = userInput.value.trim() !== '';
  const valuePhone1 = userPhone1.value.trim() !== '';
  const valuePhone2 = userPhone2.value.trim() !== '';
  const valuePhone3 = userPhone3.value.trim() !== '';
  const ckeckedAgree = ckeckAgree.checked;
  const ckeckedPrivacy = ckeckPrivacy.checked;

  if (
    valueId &&
    valuePassword &&
    valuePasswordCF &&
    valueName &&
    valuePhone1 &&
    valuePhone2 &&
    valuePhone3 &&
    ckeckedAgree &&
    ckeckedPrivacy
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

const inputFields = [
  userId,
  password,
  passwordConfirm,
  userInput,
  userPhone1,
  userPhone2,
  userPhone3,
  ckeckAgree,
  ckeckPrivacy,
];

inputFields.forEach((el) => {
  el.addEventListener('input', disabledChecked);
  el.addEventListener('change', disabledChecked);
});

// userName;
// ===== input 값 확인
validateData(userId, hasKorean, '한글');
validateData(userPw, hasKorean, '한글');
validateData(userInput, hasNumber, '숫자');
validateData(userEmail, hasKorean, '한글');
validateData(userEmailDomain, hasNumber, '숫자');
validateData(userEmailDomain, hasKorean, '한글');
valiDatePhone(userPhone1, 3, '첫번째 전화번호를 정확히 입력해주세요.');
valiDatePhone(userPhone2, 3, '두번째 전화번호를 정확히 입력해주세요.');
valiDatePhone(userPhone3, 3, '세번째 전화번호를 정확히 입력해주세요.');
