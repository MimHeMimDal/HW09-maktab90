"use strict";

function checkExternal() {
  let externalLinks = Array.from(document.querySelectorAll("a"));
  for (let item of externalLinks) {
    let href = item.getAttribute("href");
    if (href.includes("://") && !href.includes("http://internal.com")) {
      item.style.color = "orange";
    }
  }
}

checkExternal();
