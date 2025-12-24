import { validateData, hasNumber, hasKorean, hasEnglish } from '/support/js/input.js';
const title = document.querySelector('#review-title');
const content = document.querySelector('#review-content');
const starWrap = document.querySelector('.stars');
const stars = document.querySelectorAll('.stars span');
const applyBtn = document.querySelector('.review-end-btn button');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i <= index);
    });

    if (star.classList.contains('active')) {
      starWrap.classList.add('checked');
    }
  });
});

function disabledChecked() {
  const ckTitle = title.value.trim() !== '';
  const ckContent = content.value.trim() !== '';
  const ckStarWarp = starWrap.classList.contains('checked');

  if (ckTitle && ckContent && ckStarWarp) {
    console.log('zz');
    applyBtn.disabled = false;
  } else {
    applyBtn.disabled = true;
  }
}

const inputFields = [title, content, starWrap];

inputFields.forEach((el) => {
  el.addEventListener('click', disabledChecked);
  el.addEventListener('input', disabledChecked);
});

applyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/support/review-end.html';
});
