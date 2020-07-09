var currentTab = 0;

const switchTab = () => {
  let btn = document.getElementsByClassName("ham-button")[0];
  btn.addEventListener("click", () => {
    let collapSideTab = document.getElementsByClassName(
      "collapsed-side-tab"
    )[0];
    let normalSideTab = document.getElementsByClassName("side-tab")[0];
    let mainContent = document.getElementsByClassName("main-content")[0];

    if (currentTab === 0) {
      collapSideTab.classList.add("cus-collapsed-side-tab");
      normalSideTab.classList.add("cus-side-tab");
      mainContent.style.marginLeft = "100px";
      currentTab = 1;
    } else {
      collapSideTab.classList.remove("cus-collapsed-side-tab");
      normalSideTab.classList.remove("cus-side-tab");
      mainContent.style.marginLeft = "300px";
      currentTab = 0;
    }
  });
};

switchTab();
