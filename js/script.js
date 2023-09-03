function openNav() {
  var element = document.getElementById("header__inner");
  element.classList.add("header__inner--visible", "header__inner--active");
}
function closeNav() {
  var element = document.getElementById("header__inner");
  element.classList.remove("header__inner--visible");
}
