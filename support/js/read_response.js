// read_response.js
document.addEventListener('DOMContentLoaded', () => {
  const currentPost = JSON.parse(sessionStorage.getItem('currentPost'));
  const currentIndex = parseInt(sessionStorage.getItem('currentIndex'));
  const allPosts = JSON.parse(sessionStorage.getItem('allPosts'));

  if (!currentPost) {
    alert('게시글 정보를 찾을 수 없습니다.');
    window.location.href = './all.html';
    return;
  }

  document.querySelector('.title p').textContent = currentPost.제목;
  document.querySelector('.title .font12').textContent = currentPost.작성일;
  document.querySelector('.response-text-box').textContent = currentPost.문의글;

  // 답변 표시
  const answerBox = document.querySelector('.answer-box');
  if (currentPost.답변여부 && currentPost.답변글) {
    answerBox.querySelector('.answer-title').textContent = currentPost.답변글;
    // 답변 날짜는 작성일 다음날로 설정 (예시)
    const answerDate = new Date(currentPost.작성일);
    answerDate.setDate(answerDate.getDate() + 1);
    answerBox.querySelector('.answer-date').textContent = answerDate
      .toISOString()
      .split('T')[0]
      .replace(/-/g, '/');
  } else {
    answerBox.innerHTML = `
      <div class="answer-item">
        <div class="left-item">
          <p class="font16b answer-title" style="color: #999;">
            아직 답변이 등록되지 않았습니다.
          </p>
        </div>
      </div>
    `;
  }

  // 이전글/다음글 처리
  const prevPost = allPosts[currentIndex - 1];
  const nextPost = allPosts[currentIndex + 1];

  const postBars = document.querySelectorAll('.post-bar');

  // 이전글
  if (prevPost) {
    postBars[0].querySelector('.title-box').textContent = prevPost.제목;
    postBars[0].querySelector('.date-box').textContent = prevPost.작성일;
    postBars[0].querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem('currentPost', JSON.stringify(prevPost));
      sessionStorage.setItem('currentIndex', currentIndex - 1);
      location.reload();
    });
  } else {
    postBars[0].querySelector('.title-box').textContent = '등록된 이전 게시물이 없습니다.';
    postBars[0].querySelector('.date-box').textContent = '';
    postBars[0].querySelector('a').style.pointerEvents = 'none';
    postBars[0].querySelector('a').style.opacity = '0.5';
  }

  // 다음글
  if (nextPost) {
    postBars[1].querySelector('.title-box').textContent = nextPost.제목;
    postBars[1].querySelector('.date-box').textContent = nextPost.작성일;
    postBars[1].querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem('currentPost', JSON.stringify(nextPost));
      sessionStorage.setItem('currentIndex', currentIndex + 1);
      location.reload();
    });
  } else {
    postBars[1].querySelector('.title-box').textContent = '등록된 다음 게시물이 없습니다.';
    postBars[1].querySelector('.date-box').textContent = '';
    postBars[1].querySelector('a').style.pointerEvents = 'none';
    postBars[1].querySelector('a').style.opacity = '0.5';
  }

  // 목록 버튼
  document.querySelector('.button-wrap button').addEventListener('click', () => {
    window.location.href = './all.html';
  });
});
