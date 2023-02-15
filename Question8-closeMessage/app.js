"use strict";

const closeBtn = document.querySelectorAll(".close__btn");

closeBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.closest("div.message").remove();
  });
});
