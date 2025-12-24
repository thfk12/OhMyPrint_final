import { validateData, hasNumber, hasKorean, hasEnglish } from '/support/js/input.js';

const userName = document.querySelector('#username');
const userPhone = document.querySelector('#phone');
const userEmail = document.querySelector('#email');
const ckPrivacy = document.querySelector('#privacy-ckbox');
const ckDropbox = document.querySelector('.dropHeader > .dropBox');
const Textarea = document.querySelector('.textarea');
const applyBtn = document.querySelector('.apply-btn');

validateData(userName, hasNumber, '숫자');
validateData(userPhone, hasKorean, '한글');
validateData(userPhone, hasEnglish, '영어');
validateData(userEmail, hasKorean, '한글');

function disabledChecked() {
  const valueName = userName.value.trim() !== '';
  const valuePhone = userPhone.value.trim() !== '';
  const valueEmail = userEmail.value.trim() !== '';
  const checkedDropbox = ckDropbox.classList.contains('checked');
  const valueTextarea = Textarea.value.trim() !== '';
  const ckeckedPrivacy = ckPrivacy.checked;

  if (valueName && valuePhone && valueEmail && checkedDropbox && valueTextarea && ckeckedPrivacy) {
    applyBtn.disabled = false;
  } else {
    applyBtn.disabled = true;
  }
}
const inputFields = [userName, userPhone, userEmail, ckDropbox, Textarea, ckPrivacy];

inputFields.forEach((el) => {
  el.addEventListener('input', disabledChecked);
  el.addEventListener('change', disabledChecked);
  el.addEventListener('click', disabledChecked);
});

applyBtn.addEventListener('click', () => {
  window.location.href = '/support/writeQuote-end.html';
});
