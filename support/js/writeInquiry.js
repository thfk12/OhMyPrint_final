import { validateData, valiDatePhone, hasNumber, hasKorean } from './input.js';

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputEmailDomain = document.getElementById('email-domain');
const inputPhone1 = document.getElementById('phone1');
const inputPhone2 = document.getElementById('phone2');
const inputPhone3 = document.getElementById('phone3');
const inputSubject = document.getElementById('subject');
const inputMessage = document.getElementById('message');
const inputPassword = document.getElementById('password');
const ckboxTerms = document.getElementById('terms-ckbox');
const ckboxPrivacy = document.getElementById('privacy-ckbox');
const submitButton = document.getElementById('submit-btn');

// ===== 로그인이 되어이다면, 이름 가지고 오기.
let loginStatus = sessionStorage.getItem('logIned');
if (loginStatus) {
  inputName.value = `${sessionStorage.getItem('userName')}`;
}

// ===== input disabled =====
function inputCheck() {
  const valueName = inputName.value.trim() !== '';
  const valueEmail = inputEmail.value.trim() !== '';
  const valueEmailDomain = inputEmailDomain.value.trim() !== '';
  const valuePhone1 = inputPhone1.value.trim() !== '';
  const valuePhone2 = inputPhone2.value.trim() !== '';
  const valuePhone3 = inputPhone3.value.trim() !== '';
  const valueSubject = inputSubject.value.trim() !== '';
  const valueMessage = inputMessage.value.trim() !== '';
  const valuePassword = inputPassword.value.trim() !== '';
  const checkedTerms = ckboxTerms.checked;
  const checkedPrivacy = ckboxPrivacy.checked;

  if (
    valueName &&
    valueEmail &&
    valueEmailDomain &&
    valuePhone1 &&
    valuePhone2 &&
    valuePhone3 &&
    valueSubject &&
    valueMessage &&
    valuePassword &&
    checkedTerms &&
    checkedPrivacy
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const inputFields = [
  inputName,
  inputEmail,
  inputEmailDomain,
  inputPhone1,
  inputPhone2,
  inputPhone3,
  inputSubject,
  inputMessage,
  inputPassword,
];

inputFields.forEach((item) => {
  item.addEventListener('input', inputCheck);
  item.addEventListener('change', inputCheck);
});

const inputChecked = [ckboxTerms, ckboxPrivacy];

inputChecked.forEach((check) => {
  check.addEventListener('input', inputCheck);
  check.addEventListener('change', inputCheck);
});

inputCheck();

// ===== 각 input 별 입력 하면 안돼는 valid값  ====
validateData(inputName, hasNumber, '숫자');
validateData(inputEmail, hasKorean, '한글');
validateData(inputEmailDomain, hasNumber, '숫자');
validateData(inputEmailDomain, hasKorean, '한글');
inputPhone1.value = '010';
valiDatePhone(inputPhone1, 2, '첫번째 전화번호를 정확히 입력해주세요.');
valiDatePhone(inputPhone2, 3, '두번째 전화번호를 정확히 입력해주세요.');
valiDatePhone(inputPhone3, 3, '세번째 전화번호를 정확히 입력해주세요.');
valiDatePhone(inputPassword, 3, '비밀번호를 정확히 입력해주세요..');

// ===== email dropDwon ====
let mailList = document.querySelectorAll('.mail-list a');
console.log(mailList);

//mail-box
let mailBox = document.querySelector('#email-domain');
console.log(mailBox);
//sort-list의 li가 선택되면 mailbox의 값이 바뀌게 @class명.com / @hanmail.net

mailList.forEach((list) => {
  list.addEventListener('click', (e) => {
    const text = list.textContent;
    if (text === 'hanmail') {
      mailBox.value = text + '.net';
    } else {
      mailBox.value = text + '.com';
    }
  });
});
