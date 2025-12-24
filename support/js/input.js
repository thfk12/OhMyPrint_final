export const hasNumber = /\d/;
export const hasKorean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
export const hasEnglish = /[a-zA-Z]/;

export function validateData(el, has, message) {
  el.addEventListener('change', (e) => {
    const value = e.target.value;
    if (has.test(value)) {
      showToast(`${message}는 입력할 수 없습니다.`);
      console.log('동작');
      e.target.value = '';
    }
  });
}

export function valiDatePhone(el, num, message) {
  el.addEventListener('change', (e) => {
    const value = e.target.value;

    if (value.length <= num) {
      showToast(`${message}`);
      e.target.value = '';
    } else if (hasKorean.test(value)) {
      showToast(`${message}`);
      e.target.value = '';
    } else if (hasEnglish.test(value)) {
      showToast(`${message}`);
      e.target.value = '';
    }
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = 'toast-modal';
  toast.textContent = message;

  container.appendChild(toast);

  // 애니메이션이 끝나면 DOM에서 제거
  toast.addEventListener('animationend', () => {
    toast.remove();
  });
}
