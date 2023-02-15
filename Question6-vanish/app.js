"use strict";

const btn = document.getElementById("hider");

btn.addEventListener("click", () => {
  document.getElementById("text").classList.add("hide");
  setTimeout(() => {
    btn.classList.add("hide");
  }, 1000);
});
