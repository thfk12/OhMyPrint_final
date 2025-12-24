const imgGridWrap = () => {
  const grid = document.querySelector('.mobile-grid');
  const items = Array.from(grid.querySelectorAll('.img-box'));

  // 무작위로 섞기
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // 기존 요소 모두 제거
  grid.innerHTML = '';

  // 처음 8개만 show 붙여서 다시 추가
  items.slice(0, 9).forEach((item) => {
    item.classList.add('show');
    grid.appendChild(item);
  });
};

imgGridWrap();
