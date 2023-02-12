"use strict";

let externalLinks = Array.from(document.querySelectorAll("a"));
console.log(externalLinks);

function checkExternal() {
  for (let item of externalLinks) {
    console.log(item.pathname);
    console.log(item.href.includes("https://"));
    if (
      item.href.includes("https://") &&
      !item.href.includes("https://internal.com")
    ) {
      item.style.color = "orange";
    }
  }
}

checkExternal();
