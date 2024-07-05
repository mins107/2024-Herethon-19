// 기존 코드: 메뉴 토글 기능
const navBtn = document.getElementById("menuButton");
let clickCount = 0;
navBtn.addEventListener("click", () => {
  let navBar = document.getElementsByClassName("navBar")[0];
  let menuText = document.getElementsByClassName("menuText");
  let logoutbtn = document.getElementsByClassName("logout")[0];
  let userNavTxt = document.getElementsByClassName("userNavTxt")[0];
  let userNav = document.getElementsByClassName("userNav")[0];
  clickCount++;
  // 메뉴 텍스트 요소들의 스타일 변경

  if (clickCount % 2 !== 0) {
    navBar.style.width = "270px";
    logoutbtn.style.marginLeft = "40px";
    logoutbtn.style.backgroundColor = "#f1f1f1";
    userNavTxt.style.display = "inline";
    userNav.style.backgroundColor = "#f1f1f1";
    for (let i = 0; i < menuText.length; i++) {
      menuText[i].style.display = "block";
    }
  } else {
    navBar.style.width = ""; // 초기 상태로 돌아가기
    navBar.style.position = "";
    logoutbtn.style.marginLeft = "";
    logoutbtn.style.backgroundColor = "";
    userNavTxt.style.display = "";
    userNav.style.backgroundColor = "";
    for (let i = 0; i < menuText.length; i++) {
      menuText[i].style.display = "none";
    }
  }
});

// 새로 추가된 코드: Django API와 상호작용하여 목표 데이터를 가져와 렌더링
document.addEventListener('DOMContentLoaded', function() {
  fetchGoals('all'); // 처음 로드 시 전체 데이터를 가져옵니다.

  // 카테고리 버튼 클릭 이벤트 리스너 추가
  const categoryButtons = document.querySelectorAll('.category-buttons button');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
      fetchGoals(category);
    });
  });
});

// API로부터 목표 데이터를 가져옵니다.
function fetchGoals(filter) {
  let apiUrl = '/api/goals/';
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const goalsContainer = document.getElementById('goals-container');
      goalsContainer.innerHTML = ''; // 이전 목표들을 모두 지웁니다.

      data.forEach(goal => {
        const goalCard = createGoalCard(goal);
        goalsContainer.appendChild(goalCard);
      });

      filterCategory(filter); // 카테고리 필터링 적용
    })
    .catch(error => console.error('Error fetching goals:', error));
}

// 목표 카드를 생성합니다.
function createGoalCard(goal) {
  const goalCard = document.createElement('div');
  goalCard.className = 'goal-card';
  goalCard.dataset.username = goal.username;
  goalCard.dataset.title = goal.title;
  goalCard.dataset.type = goal.category;
  goalCard.dataset.image = goal.image;
  goalCard.dataset.frequency = goal.frequency;
  goalCard.dataset.description = goal.description;
  goalCard.dataset.challengecount = goal.challenge_count;
  goalCard.dataset.tupcount = goal.tup_count;
  goalCard.dataset.tdowncount = goal.tdown_count;

  goalCard.innerHTML = `
    <div class="goal-header">
      <div class="goal-left">
        <div class="logo-background">
          <img src="${goal.image}" alt="Title Logo" class="title-logo">
        </div>
        <div class="goal-title">
          <div class="goal-nickname">${goal.username}</div>
          <a>${goal.title}</a>
        </div>
      </div>
      <div class="goal-right">
        <a class="goal-type">${goal.category}</a>
        <img src="img/asset/Basket_alt_3.svg" alt="Cart Icon" class="cart-icon">
      </div>
    </div>
    <hr class="goal-separator">
    <div class="goal-info">
      <div class="goal-details">
        <div class="firstline">
          <div class="challengecount">${goal.challenge_count}회차</div>
          <div class="first-line">
            <span class="highlight">${goal.frequency.split(' ')[0]}</span>
            <span>${goal.frequency.split(' ')[1]}</span>
          </div>
        </div>
        <div class="second-line">
          <p>${goal.description}</p>
        </div>
      </div>
      <div class="right-block">
        <img src="${goal.image}" alt="Goal Image" class="goal-image">
        <div class="like-container">
          <img src="img/asset/Thumbs Up.svg" alt="Thumbs Up" class="ThumbsUp">
          <a class="TUpcount">${goal.tup_count}</a>
          <img src="img/asset/Thumbs Down.svg" alt="Thumbs Down" class="ThumbsDown">
          <a class="TDowncount">${goal.tdown_count}</a>
        </div>
      </div>
    </div>
  `;

  return goalCard;
}

// 카테고리 필터링을 적용합니다.
function filterCategory(category) {
  const items = document.querySelectorAll('.goal-card');
  const buttons = document.querySelectorAll('.category-buttons button');

  buttons.forEach(function(button) {
    button.classList.remove('active');
    if (button.getAttribute('onclick').includes(category)) {
      button.classList.add('active');
    }
  });

  items.forEach(function(item) {
    if (category === 'all' || item.getAttribute('data-type').toLowerCase() === category.toLowerCase()) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
