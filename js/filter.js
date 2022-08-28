const filterShowBtn = document.querySelector(".filter__show-btn");
const filterBoxInner = document.querySelector(".filter-box__inner");

filterShowBtn.addEventListener("click", () => {
  filterBoxInner.classList.toggle("active");
});
