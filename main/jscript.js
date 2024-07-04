window.onload = () => {
  // 드롭다운 목표
  document.querySelector(".dropbtn_click").onclick = () => {
    dropdown();
  };

  let dropdownMainElements = document.getElementsByClassName("dropdownMain");
  for (let i = 0; i < dropdownMainElements.length; i++) {
    dropdownMainElements[i].onclick = (event) => {
      showMenu(event.target.innerText); // value를 event.target.innerText로 변경
    };
  }

  dropdown = () => {
    var v = document.querySelector(".dropdown-content");
    var dropbtn = document.querySelector(".dropbtn");
    v.classList.toggle("show");
    dropbtn.style.borderColor = "rgb(94, 94, 94)";
  };

  showMenu = (value) => {
    var dropbtn_icon = document.querySelector(".dropbtn_icon");
    var dropbtn_content = document.querySelector(".dropbtn_content");

    dropbtn_icon.innerText = "";
    dropbtn_content.innerText = value;
  };

  //드롭다운 횟수
  document.querySelector(".dropbtn_clickT").onclick = () => {
    dropdownT();
  };

  let dropdownMainElementsT = document.getElementsByClassName("dropdownMainT");
  for (let i = 0; i < dropdownMainElementsT.length; i++) {
    dropdownMainElementsT[i].onclick = (event) => {
      showMenuT(event.target.innerText); // value를 event.target.innerText로 변경
    };
  }

  dropdownT = () => {
    var vT = document.querySelector(".dropdown-contentT");
    var dropbtnT = document.querySelector(".dropbtnT");
    vT.classList.toggle("show");
    dropbtnT.style.borderColor = "rgb(94, 94, 94)";
  };

  showMenuT = (value) => {
    var dropbtn_iconT = document.querySelector(".dropbtn_iconT");
    var dropbtn_contentT = document.querySelector(".dropbtn_contentT");

    dropbtn_iconT.innerText = "";
    dropbtn_contentT.innerText = value;
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
    clickCount++;
    // 메뉴 텍스트 요소들의 스타일 변경

    if (clickCount % 2 !== 0) {
      navBar.style.width = "270px";
      for (let i = 0; i < menuText.length; i++) {
        menuText[i].style.display = "block";
      }
    } else {
      navBar.style.width = ""; // 초기 상태로 돌아가기
      navBar.style.position = "";
      for (let i = 0; i < menuText.length; i++) {
        menuText[i].style.display = "none";
      }
    }
  });
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
