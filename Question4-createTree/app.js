"use strict";

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function objToUl(obj) {
  let objKeys = Object.keys(obj);
  let objValues = Object.values(obj);
  let ul = document.createElement("ul");

  for (let i = 0; i < objKeys.length; i++) {
    let li = document.createElement("li");
    let nestedUl = objToUl(objValues[i]);
    li.append(objKeys[i], nestedUl);
    ul.appendChild(li);
  }

  return ul;
}

function createTree(container, obj) {
  let objUl = objToUl(obj);
  document.querySelector(container).append(objUl);
}

createTree("body", data);
