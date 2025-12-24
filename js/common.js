const dropBtns = document.querySelectorAll('.dropBox');
const dropList = document.querySelectorAll('.sort-list li ');

function closeAllDropdowns() {
  dropBtns.forEach((btn) => btn.classList.remove('active'));
  document.querySelectorAll('.sort-list').forEach((list) => list.classList.remove('active'));
}

dropBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.toggle('active');
    const list = btn.nextElementSibling;

    list?.classList.toggle('active', isActive);
  });
});

dropList.forEach((item) => {
  item.addEventListener('click', (e) => {
    dropList.forEach((li) => li.classList.remove('active'));
    item.classList.add('active');
    const textList = item.querySelector('a').textContent;
    item.parentElement.previousElementSibling.classList.add('checked');
    item.parentElement.previousElementSibling.textContent = textList;
    closeAllDropdowns();
  });
});

document.addEventListener('click', (e) => {
  const clickedInside = e.target.closest('.dropBox') || e.target.closest('.sort-list');
  if (!clickedInside) {
    closeAllDropdowns();
  }
});
