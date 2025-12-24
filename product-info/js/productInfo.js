
// 이미지 슬라이드 배너(swiper)

  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      width: null, // 자동 너비 계산
    calculateWidth: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
       // 너비 제한 추가
    width: null, // 자동 너비 계산
    calculateWidth: true,
    // 추가 설정
    loop: false,
    centeredSlides: false,
    });

//이미지 슬라이드 배너

// let sliderBtnRight = document.querySelector('.next-btn-right');
// let sliderBtnLeft = document.querySelector('.next-btn-left');
// let sliderImg = document.querySelector('.item-slider-main img');
// let sliderSmallImg = document.querySelectorAll('.item-slider>li');
// let sliderSmallImgNum = sliderSmallImg.length;
// let num = 1;

// sliderBtnRight.addEventListener('click', () => {
//   if (num <= sliderSmallImgNum - 1) {
//     num++;
//     sliderImg.setAttribute('src', `./images/item-img${num}.png`);
//   }
// });
// sliderBtnLeft.addEventListener('click', () => {
//   if (num - 1 > 0) {
//     num--;
//     sliderImg.setAttribute('src', `./images/item-img${num}.png`);
//   }
// });


// select 버튼 선택

document.addEventListener("click", (e) => {
  if (e.target.matches(".select-btn button")) {
    const clickedButton = e.target;
    
    if (clickedButton.closest(".select-size-wrap")) {
      // select-size-wrap 안의 모든 버튼에서 active 제거
      const sizeWrap = clickedButton.closest(".select-size-wrap");
      console.log(sizeWrap);
      sizeWrap.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active");
      });
    } else {
      // 일반적인 경우: 같은 ul 안의 버튼들만
      const parentUl = clickedButton.closest("ul");
      console.log(parentUl);
      parentUl.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active");
      });
    }
    
    // 클릭된 버튼에 active 추가
    clickedButton.classList.add("active");
  }
});


// 섹션(서브메뉴바) 클릭 전환

let navMenus = document.querySelectorAll('.item-detail-menubar>li');
console.log(navMenus);
let sections = document.querySelectorAll('.navSection');
console.log(sections);

navMenus.forEach((item) => {
  item.addEventListener('click', () => {
    // 메뉴 active 토글
    navMenus.forEach((n) => {
      n.classList.remove('active');
    });
    item.classList.add('active');

    // 섹션 보이기
    sections.forEach((sec) => {
      sec.classList.add('hidden');
    });

    // 섹션 숨기기
    let targetSection = document.getElementById(item.dataset.target);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }
    // document.getElementById(item.dataset.target).classList.remove("hidden");
  });
});


// 구매 수량 버튼
let minusBtn = document.querySelector(".count-btn-min");
let plusBtn = document.querySelector(".count-btn-plus");
let baseCount = 0;

//플러스 버튼 눌렀을 때
plusBtn.addEventListener("click",()=>{
  let plusGrand = plusBtn.closest("ul");
  let plusActive = plusGrand.querySelector("span");
  console.log(plusActive);
  //클릭 숫자 카운팅
  baseCount++;
  console.log(baseCount);
  plusActive.innerHTML = baseCount;
})

minusBtn.addEventListener("click",()=>{
  let minusGrand = minusBtn.closest("ul");
  let minusActive = minusGrand.querySelector("span");
  console.log(minusActive);
  if(baseCount > 0){
  //클릭 숫자 카운팅
  baseCount--;
  console.log(baseCount);
  minusActive.innerHTML = baseCount;
  }
})

//첨부파일 업로드
let fileInput = document.querySelector(".fileupload");
let fileName = document.querySelector(".file-name");

fileInput.addEventListener("change",()=>{
  if(fileInput.files.length>0){
    fileName.textContent=fileInput.files[0].name;
  } else{
    fileName.textContent = "선택된 파일 없음"
  }
})