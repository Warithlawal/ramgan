function openMenu(){
  document.getElementById("navLinks").style.right = "0";
}
function closeMenu(){
  document.getElementById("navLinks").style.right = "-260px";
}

const filterBtn = document.querySelector(".filter-btn");
const mobileFilters = document.getElementById("mobileFilters");

filterBtn.addEventListener("click", () => {
  mobileFilters.classList.toggle("active");
});