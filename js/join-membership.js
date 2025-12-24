const select = document.querySelector('.databox2');
const emailInput = document.querySelector('.databox3');

select.addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex];
  const domain = selectedOption.dataset.name;

  if (domain) {
    // 네이버/구글/다음 선택 시 value에 넣기
    emailInput.value = domain;
  } else {
    // 직접입력 선택 시 초기화
    emailInput.value = '';
  }

  console.log(domain);
});

//-------------------비밀번호-------------------

const pw = document.querySelector('#uPass');
console.log(pw);

const pwCheck = document.querySelector('#uPass-check');
console.log(pwCheck);

const pwComment = document.querySelector('.uPass-comment');
console.log(pwComment);

const pwCommentCheck = document.querySelector('.uPass-comment-check');

function checkPasswordMatch() {
  if (pw.value == '' || pwCheck.value == '') {
    pwComment.style.display = 'none';
  } else if (pw.value == pwCheck.value) {
    pwCommentCheck.style.display = 'block';
    pwComment.style.display = 'none';
  } else {
    pwComment.style.display = 'block';
    pwCommentCheck.style.display = 'none';
  }
}

// 이벤트 줄거야 input할때 위에 설정한 함수를 실행
pw.addEventListener('input', checkPasswordMatch);
pwCheck.addEventListener('input', checkPasswordMatch);

//change
