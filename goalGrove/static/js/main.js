window.onload = () => {
  // 드롭다운 목표
  document.querySelector(".dropbtn_click").onclick = () => {
    dropdown();
  };

  let dropdownMainElements = document.getElementsByClassName("dropdownMain");
  for (let i = 0; i < dropdownMainElements.length; i++) {
    dropdownMainElements[i].onclick = (event) => {
      showMenu(event.target.id); // value를 event.target.innerText로 변경
    };
  }

  dropdown = () => {
    var v = document.querySelector(".dropdown-content");
    var dropbtn = document.querySelector(".dropbtn");
    v.classList.toggle("show");
    dropbtn.style.borderColor = "rgb(94, 94, 94)";
  };

  showMenu = (id) => {
    var dropbtn_icon = document.querySelector(".dropbtn_icon");
    var dropbtn_content = document.querySelector(".dropbtn_content");
    var goalContent = document.querySelector(".Wrapper2");
    var goalAdd = document.querySelector(".goalAdd");

    goalContent.innerHTML = "";

    if (id === "createGoal") {
      dropbtn_content.innerHTML = "목표 만들기";

      goalContent.innerHTML = `
              <div class="goalWrapper">
                <input placeholder="목표 이름 작성하기" class="goalTxtInput"></input>
                <div>
                  <span class="categoryExp">카테고리</span>
                  <div class="dropdownCategory">
                    <button class="dropbtn_category">
                      <div class="dropbtn_category_content">취미</div>
                      <img
                        src="{% static 'img/dropdownWhite.svg' %}"
                        class="dropbtn_category_click dropbtn_category_icon"
                        onclick="dropdownCategory()"
                      />
                    </button>
                  </div>
                  <div class="dropdown-category-content">
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      취미
                    </div>
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      건강
                    </div>
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      소비
                    </div>
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      공부
                    </div>
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      식단
                    </div>
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      자기계발
                    </div>
                    <div
                      class="category-content"
                      onclick="showCategory(this.innerText)"
                    >
                      기타
                    </div>
                  </div>
                </div>
              </div>

              <div class="line"></div>
              <div class="goalDetail">
                <img
                  src="{% static 'img/groveimg.svg' %}"
                  alt="사진 추가"
                  class="goalImg"
                />
                <div class="goalContent">
                  <div class="goalTime">
                    <div class="dropdownT">
                      <button class="dropbtnT">
                        <div class="dropbtn_contentT">하루에</div>
                        <img
                          src="{% static 'img/dropdown.svg' %}"
                          class="dropbtn_clickT dropbtn_iconT"
                          onclick="dropdownT()"
                        />
                      </button>
                      <div class="dropdown-contentT">
                        <div 
                          class="dropdownMainT" id="day"
                          onclick="showMenuT(this.innerText)"
                        >
                          하루에
                        </div>
                        <div
                          class="dropdownMainT" id="week"
                          onclick="showMenuT(this.innerText)"
                        >
                          일주일에
                        </div>
                        <div
                          class="dropdownMainT" id="month"
                          onclick="showMenuT(this.innerText)"
                        >
                          한달에
                        </div>
                      </div>
                    </div>
                    <span>
                      <span class="count">1</span>
                      <span class="countTxt">회</span>
                    </span>
                  </div>

                  <div class="goalExplain">
                    <textarea rows="1"class="goalExplainInput" placeholder="구체적인 설명 작성하기"></textarea>
                  </div>
                </div>
              </div>
              <button class="goalAdd" onclick="addGoalEvent()">목표 추가하기</button>
            `;
    } else if (id === "goalCart") {
      dropbtn_content.innerHTML = "목표 장바구니";
      goalContent.innerHTML = `
<div class="goalTxt">목표 장바구니</div>
              <div class="line"></div>
              <div class="Wrapper10">
                <div class="Wrapper6">
                  <div class="goalWrapper">
                    <span class="marketName">말하는 감자</span>
                    <img src="{% static 'img/X.svg'}" alt="창 닫기" class="marketX" />
                  </div>
                  <div class="goalWrapper">
                    <div class="marketWrapper">
                      <img
                        src="{% static 'img/market.svg'}"
                        alt="장바구니 사진"
                        class="marketImg"
                      />
                      <div class="marketWrapper2">
                        <div class="marketWrapper3">
                          <span class="marketgoalTxt">주 3회 요가</span>
                          <span class="category_content">운동</span>
                        </div>
                        <div class="marketWrapper4">
                          <span class="timeIng_market">일주일에</span>
                          <span class="countTxt_market">3회</span>
                        </div>
                      </div>
                    </div>
                    <div class="marketChoicebtn">선택하기</div>
                  
                  </div>
                
                </div>
              </div>
            `;
    }
  };

  // 드롭다운 카테고리
  document.querySelector(".dropbtn_category_click").onclick = () => {
    dropdownCategory();
  };

  let categoryContentElements =
    document.getElementsByClassName("category-content");
  for (let i = 0; i < categoryContentElements.length; i++) {
    categoryContentElements[i].onclick = (event) => {
      showCategory(event.target.innerText); // value를 event.target.innerText로 변경
    };
  }

  dropdownCategory = () => {
    var va = document.querySelector(".dropdown-category-content");
    var dropbtn_category = document.querySelector(".dropbtn_category");
    va.classList.toggle("show");
    dropbtn_category.style.borderColor = "rgb(94, 94, 94)";
  };

  showCategory = (value) => {
    var dropbtn_category_icon = document.querySelector(
      ".dropbtn_category_icon"
    );
    var dropbtn_category_content = document.querySelector(
      ".dropbtn_category_content"
    );

    dropbtn_category_icon.innerText = "";
    dropbtn_category_content.innerText = value;
  };

  //드롭다운 카테고리2
  document.querySelector(".dropbtn_category_click2").onclick = () => {
    dropdownCategory2();
  };

  let categoryContentElements2 =
    document.getElementsByClassName("category-content2");
  for (let i = 0; i < categoryContentElements2.length; i++) {
    categoryContentElements2[i].onclick = (event) => {
      showCategory2(event.target.innerText); // value를 event.target.innerText로 변경
    };
  }

  dropdownCategory2 = () => {
    var va2 = document.querySelector(".dropdown-category-content2");
    var dropbtn_category2 = document.querySelector(".dropbtn_category2");
    va2.classList.toggle("show");
    dropbtn_category2.style.borderColor = "rgb(94, 94, 94)";
  };

  showCategory2 = (value) => {
    var dropbtn_category_icon2 = document.querySelector(
      ".dropbtn_category_icon2"
    );
    var dropbtn_category_content2 = document.querySelector(
      ".dropbtn_category_content2"
    );

    dropbtn_category_icon2.innerText = "";
    dropbtn_category_content2.innerText = value;
  };

  //드롭다운 카테고리 3(과정나누기)
  document.querySelector(".dropbtn_category_click3").onclick = () => {
    dropdownCategory3();
  };

  let categoryContentElements3 =
    document.getElementsByClassName("category-content3");
  for (let i = 0; i < categoryContentElements3.length; i++) {
    categoryContentElements3[i].onclick = (event) => {
      showCategory3(event.target.innerText); // value를 event.target.innerText로 변경
    };
  }

  dropdownCategory3 = () => {
    var va3 = document.querySelector(".dropdown-category-content3");
    var dropbtn_category3 = document.querySelector(".dropbtn_category3");
    va3.classList.toggle("show");
    dropbtn_category3.style.borderColor = "rgb(94, 94, 94)";
  };

  showCategory3 = (value) => {
    var dropbtn_category_icon3 = document.querySelector(
      ".dropbtn_category_icon3"
    );
    var dropbtn_category_content3 = document.querySelector(
      ".dropbtn_category_content3"
    );

    dropbtn_category_icon3.innerText = "";
    dropbtn_category_content3.innerText = value;
  };

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

  // function toggleMenu() {
  //   var sidebar = document.getElementById("sidebar");
  //   sidebar.classList.toggle("active");
  // }

  let selectedValue = "일주일에"; // 초기값 설정

  // 확장 기능 추가 함수
  const addExpandFunctionality = (wrapper) => {
    wrapper.onclick = () => {
      if (wrapper.classList.contains("expand")) {
        goalOriginal(wrapper);
      } else {
        goalExpand(wrapper);
      }
    };
  };

  // 확장 함수
  const goalExpand = (wrapper) => {
    const goalIngDetail = wrapper.querySelector(".goalIngDetail");

    wrapper.style.paddingBottom = "120px";
    wrapper.classList.add("expand");
    if (goalIngDetail) {
      goalIngDetail.style.display = "block";
    }
  };

  // 축소 함수
  const goalOriginal = (wrapper) => {
    const goalIngDetail = wrapper.querySelector(".goalIngDetail");

    wrapper.style.paddingBottom = "";
    wrapper.classList.remove("expand");
    if (goalIngDetail) {
      goalIngDetail.style.display = "";
    }
  };

  // 기존 Wrapper3 요소에 확장 기능 추가
  document.querySelectorAll(".Wrapper3").forEach(addExpandFunctionality);

  // 목표 추가 함수
  const addGoalEvent = () => {
    const newGoalName = document.querySelector(".goalTxtInput").value;

    const newGoal = document.createElement("div");
    newGoal.innerHTML = `
      <div class="Wrapper3">
        <div class="goalWrapper">
          <div class="goalTxt2" id="goalTxt">${newGoalName}</div>
          <div>
            <span class="categoryExp">카테고리</span>
            <div class="dropdownCategory2">
              <button class="dropbtn_category2">
                <div class="dropbtn_category_content2">취미</div>
                <img src="image/dropdownWhite.svg" class="dropbtn_category_click2 dropbtn_category_icon2" onclick="dropdownCategory2()" />
              </button>
            </div>
            <div class="dropdown-category-content2">
              <div class="category-content2" onclick="showCategory2(this.innerText)">취미</div>
              <div class="category-content2" onclick="showCategory2(this.innerText)">건강</div>
              <div class="category-content2" onclick="showCategory2(this.innerText)">소비</div>
              <div class="category-content2" onclick="showCategory2(this.innerText)">공부</div>
              <div class="category-content2" onclick="showCategory2(this.innerText)">식단</div>
              <div class="category-content2" onclick="showCategory2(this.innerText)">자기계발</div>
              <div class="category-content2" onclick="showCategory2(this.innerText)">기타</div>
            </div>
          </div>
        </div>
        <div class="line2"></div>
        <div class="goalDetail2">
          <div class="goalDetail1">
            <img src="image/goalIng.png" alt="이루고 있는 목표 이미지" class="imgIng" />
            <div class="timeIng">${selectedValue}</div> <!-- 선택된 값 사용 -->
            <div class="countTxt">4회</div>
          </div>
          <div>
            <div class="detailIcon">
              <img class="detailIconImg" src="image/Line_up.png" alt="성취율 아이콘" />
              <span class="detailTxt2">성취율</span>
              <span class="percentage">65%</span>
            </div>
            <div class="detailIcon">
              <img class="detailIconImg" src="image/Chart.png" alt="참가자 아이콘" />
              <span class="detailTxt2">참가자</span>
              <span class="participant">630명</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const newWrapper = newGoal.querySelector(".Wrapper3");
    document.querySelector(".goalingg").appendChild(newGoal);

    // 추가된 Wrapper3 요소에 확장 기능 추가
    addExpandFunctionality(newWrapper);
  };

  // 드롭다운 기능
  document.querySelector(".dropbtn_clickT").onclick = () => {
    dropdownT();
  };

  let dropdownMainElementsT = document.getElementsByClassName("dropdownMainT");
  for (let i = 0; i < dropdownMainElementsT.length; i++) {
    dropdownMainElementsT[i].onclick = (event) => {
      showMenuT(event.target);
    };
  }

  dropdownT = () => {
    var vT = document.querySelector(".dropdown-contentT");
    var dropbtnT = document.querySelector(".dropbtnT");
    vT.classList.toggle("show");
    dropbtnT.style.borderColor = "rgb(94, 94, 94)";
  };

  showMenuT = (element) => {
    var dropbtn_iconT = document.querySelector(".dropbtn_iconT");
    var dropbtn_contentT = document.querySelector(".dropbtn_contentT");

    var value = element.innerText;
    var id = element.id;

    dropbtn_iconT.innerText = "";
    dropbtn_contentT.innerText = value;

    // 선택된 값을 저장
    selectedValue = value;

    // .timeIng 요소의 내용을 변경
    var timeIng = document.querySelector(".timeIng");
    if (timeIng) {
      timeIng.innerHTML = value;
    }
  };

  // 목표 추가 버튼에 이벤트 리스너 추가
  document.querySelector(".goalAdd").onclick = addGoalEvent;
};

window.onclick = (e) => {
  if (!e.target.matches(".dropbtn_click")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  if (!e.target.matches(".dropbtn_clickT")) {
    var dropdownsT = document.getElementsByClassName("dropdown-contentT");

    for (let i = 0; i < dropdownsT.length; i++) {
      let openDropdownT = dropdownsT[i];
      if (openDropdownT.classList.contains("show")) {
        openDropdownT.classList.remove("show");
      }
    }
  }

  if (!e.target.matches(".dropbtn_category_click")) {
    var dropdowns_category = document.getElementsByClassName(
      "dropdown-category-content"
    );

    for (let i = 0; i < dropdowns_category.length; i++) {
      let openDropdown_category = dropdowns_category[i];
      if (openDropdown_category.classList.contains("show")) {
        openDropdown_category.classList.remove("show");
      }
    }
  }

  if (!e.target.matches(".dropbtn_category_click2")) {
    var dropdowns_category2 = document.getElementsByClassName(
      "dropdown-category-content2"
    );

    for (let i = 0; i < dropdowns_category2.length; i++) {
      let openDropdown_category2 = dropdowns_category2[i];
      if (openDropdown_category2.classList.contains("show")) {
        openDropdown_category2.classList.remove("show");
      }
    }
  }

  if (!e.target.matches(".dropbtn_category_click3")) {
    var dropdowns_category3 = document.getElementsByClassName(
      "dropdown-category-content3"
    );

    for (let i = 0; i < dropdowns_category3.length; i++) {
      let openDropdown_category3 = dropdowns_category3[i];
      if (openDropdown_category3.classList.contains("show")) {
        openDropdown_category3.classList.remove("show");
      }
    }
  }
};
