// const content = document.querySelectorAll(".according-content");

// content.forEach((el) => {
//   const header = el.querySelector("header");
//   header.onclick = function () {
//     const current = this.parentNode.children[1];
//     const active = document.querySelector(".active");
//     if (!current.classList.contains("active") && active) {
//       active.classList.remove("active");
//     }
//     current.classList.toggle("active");
//   };
// });
// document.onclick = function (e) {
//   console.log(e.target.class !== "active");
// };

const header = document.querySelectorAll("header");
const description = document.querySelectorAll(".description");

header.forEach((headers) => {
  headers.addEventListener("click", function (e) {
    description.forEach((items) => {
      if (headers.nextElementSibling && items.classList.contains("active")) {
        items.classList.remove("active");
      }
    });
    headers.nextElementSibling.classList.toggle("active");
  });
});
window.onclick = (e) => {
  if (!e.target.matches("header")) {
    header.forEach((btn) => btn.classList.remove("active"));
    description.forEach((acc) => acc.classList.remove("active"));
  }
};
