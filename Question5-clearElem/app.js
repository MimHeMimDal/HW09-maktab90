"use strict";

function clearElem(el) {
  let element = document.getElementById(el);
  let childNodes = Array.from(element.childNodes);

  for (let i = 0; i < childNodes.length; i++) {
    element.removeChild(childNodes[i]);
  }

//   let child = element.lastElementChild;
  //   while (child) {
  //     element.removeChild(child);
  //     child = element.lastElementChild;
  //   }
}

clearElem("elem");
