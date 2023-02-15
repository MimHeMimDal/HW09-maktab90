"use strict";

const btn = document.getElementById("click");
const list = document.getElementById("ul");

btn.addEventListener("click", () => {
  list.hidden = !list.hidden;
});
