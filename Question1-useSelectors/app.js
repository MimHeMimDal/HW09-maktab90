"use strict";

console.log(document.querySelector("table#age-table"));
console.log(document.querySelectorAll("table#age-table label"));
let tdArray = Array.from(document.querySelectorAll("table#age-table td"));

function firstTdWithAge() {
  for (let item of tdArray) {
    if ((item.textContent = "Age:")) {
      console.log(item);
      break;
    }
  }
}

firstTdWithAge();

console.log(document.querySelector('form[name="search"]  input:first-child'));
console.log(document.querySelector('form[name="search"] > input:last-child'));
