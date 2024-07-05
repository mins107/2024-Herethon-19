// function toggleMenu() {
//     var sidebar = document.getElementById("sidebar");
//     sidebar.classList.toggle("active");
// }

document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("reviewForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        var reviewInput = document.getElementById("reviewInput").value;
        if (reviewInput) {
          var reviewList = document.getElementById("reviewList");
          var newReview = document.createElement("div");
          newReview.className = "review";
          newReview.innerHTML = `
                  <div class="logo-background">
                      <img src="asset/Logo2 1.svg" alt="User Icon" class="user-icon">
                  </div>
                  <div class="review-content">
                      <div class="review-username">New User</div>
                      <div class="review-text">${reviewInput}</div>
                  </div>
                  <div class="review-actions">
                      <button class="thumbs-up"><img src="asset/Thumbs Up.svg" alt="Thumbs Up"></button>
                      <button class="thumbs-down"><img src="asset/Thumbs Down.svg" alt="Thumbs Down"></button>
                  </div>
              `;
          reviewList.appendChild(newReview);
          document.getElementById("reviewInput").value = "";
  
          // Add event listeners for the new review buttons
          addReviewButtonListeners(newReview);
        }
      });
  
    function addReviewButtonListeners(review) {
      review.querySelector(".thumbs-up").addEventListener("click", function () {
        const img = this.querySelector("img");
        if (img.src.includes("asset/Thumbs Up.svg")) {
          img.src = "asset/Thumbs Up_fill.svg";
        } else {
          img.src = "asset/Thumbs Up.svg";
        }
      });
  
      review.querySelector(".thumbs-down").addEventListener("click", function () {
        const img = this.querySelector("img");
        if (img.src.includes("asset/Thumbs Down.svg")) {
          img.src = "asset/Thumbs Down_fill.svg";
        } else {
          img.src = "asset/Thumbs Down.svg";
        }
      });
    }
  
    // Initialize event listeners for existing reviews
    document.querySelectorAll(".review").forEach(addReviewButtonListeners);
  
    document.querySelector(".review-tab").addEventListener("click", function () {
      window.location.href = "review.html";
    });
  
    document.querySelector(".qna-tab").addEventListener("click", function () {
      window.location.href = "q&a.html";
    });
  
    // Add event listeners for goal action buttons to maintain hover color
    document.querySelectorAll(".goal-actions button").forEach((button) => {
      button.addEventListener("click", function () {
        const goalActions = button.parentElement;
        goalActions
          .querySelectorAll("button")
          .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  
    // Set active state for category buttons on page load
    filterCategory("all");
  });
  
  function filterCategory(category) {
    var items = document.querySelectorAll(".goal-card");
    var buttons = document.querySelectorAll(".category-buttons button");
  
    buttons.forEach(function (button) {
      button.classList.remove("active");
      if (
        button.getAttribute("data-category") === category ||
        (category === "all" && button.getAttribute("data-category") === "all")
      ) {
        button.classList.add("active");
      }
    });
  
    items.forEach(function (item) {
      if (
        category === "all" ||
        item.getAttribute("data-category").toLowerCase() === category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("reviewForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        var reviewInput = document.getElementById("reviewInput").value;
        if (reviewInput) {
          var reviewList = document.getElementById("reviewList");
          var newReview = document.createElement("div");
          newReview.className = "review";
          newReview.innerHTML = `
                  <div class="logo-background">
                      <img src="asset/Logo2 1.svg" alt="User Icon" class="user-icon">
                  </div>
                  <div class="review-content">
                      <div class="review-username">New User</div>
                      <div class="review-text">${reviewInput}</div>
                  </div>
                  <div class="review-actions">
                      <button class="thumbs-up"><img src="asset/Thumbs Up.svg" alt="Thumbs Up"></button>
                      <button class="thumbs-down"><img src="asset/Thumbs Down.svg" alt="Thumbs Down"></button>
                  </div>
              `;
          QList.appendChild(newReview);
          document.getElementById("QInput").value = "";
  
          // Add event listeners for the new review buttons
          addQButtonListeners(newReview);
        }
      });
  });
  
  window.onload = () => {
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
        navBar.style.width = "15rem";
        logoutbtn.style.marginLeft = "30%";
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
  };
  