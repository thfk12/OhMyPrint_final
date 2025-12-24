//header 불러오기
fetch('/header.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('#header').innerHTML = data;
    const topBanner = document.querySelector('.top-banner');
    const bannerBtn = topBanner.querySelector('.closeBtn');

    bannerBtn.addEventListener('click', () => {
      topBanner.remove();
    });

    const gnb = document.querySelector('.gnb');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        gnb.classList.remove('hidden');
      } else {
        gnb.classList.add('hidden');
      }
    });

    //상단 검색 기능
    const searchIcon = document.querySelector('.search-wrap .search');
    searchIcon.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('asd');
      searchIcon.classList.toggle('active');
    });

    const closeBtn = document.querySelector('.search-container .close-icon');
    closeBtn.addEventListener('click', (e) => {
      if (searchIcon.classList.contains('active')) {
        searchIcon.classList.remove('active');
      }
    });

    const container = document.querySelector('.search-container');
    const inner = document.querySelector('.search-container .inner');
    container.addEventListener('click', (e) => {
      if (!inner.contains(e.target) && searchIcon.classList.contains('active')) {
        searchIcon.classList.remove('active');
      }
    });

    //햄버거 메뉴
    const hamBtn = document.querySelector('.ham-btn');
    hamBtn.addEventListener('click', function () {
      hamBtn.classList.add('active');
    });

    const hamBtnClose = document.querySelector('.ham-nav-wrap .close-btn');
    hamBtnClose.addEventListener('click', (e) => {
      hamBtn.classList.remove('active');
      e.stopPropagation();
    });

    //마이페이지 변경
    // const loginStatus = sessionStorage.getItem('logIned');
    // console.log(loginStatus);
    let loginLink = document.querySelector('.login');
    let mypageLink = document.querySelector('.mypage');
    let logoutLink = document.querySelector('.logout');
    let nameLink = document.querySelector('.name');
    let userName = document.querySelector('.name span');
    let userName2 = document.querySelector('.hamName span');

    function updateLoginLink() {
      userName.textContent = `${sessionStorage.getItem('userName')}님`;
      userName2.textContent = `${sessionStorage.getItem('userName')}님`;
      let loginStatus = sessionStorage.getItem('logIned');
      console.log('loginStatus');
      if (loginStatus == 'true') {
        console.log('로그인 완료');
        loginLink.classList.add('hidden');
      } else {
        console.log('로그인 안됨');
        mypageLink.classList.add('hidden');
        logoutLink.classList.add('hidden');
        userName2.classList.add('hidden');
        nameLink.classList.add('hidden');
      }
    }
    updateLoginLink();

    logoutLink.addEventListener('click', () => {
      sessionStorage.removeItem('logIned');
      window.location.reload();
    });
  });

//footer 불러오기
fetch('/footer.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('#footer').innerHTML = data;

    const openModal = document.querySelectorAll('.open-modal');

    openModal.forEach((button) => {
      button.addEventListener('click', (e) => {
        console.log('모달버튼있다');
        e.preventDefault();
        const targetSelect = button.getAttribute('data-target');
        const targetModal = document.querySelector(targetSelect);

        console.log(targetSelect);

        targetModal?.classList.remove('hidden');

        const closeBtn = targetModal.querySelector('.modal-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            targetModal?.classList.add('hidden');
          });
        }
      });
    });
    //
  });
