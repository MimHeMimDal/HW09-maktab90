"use strict";

function liMaker() {
  let ul = document.createElement("ul");
  document.body.append(ul);

  while (true) {
    let liContent = prompt("Please enter your content: ");
    let li = document.createElement("li");

    if (liContent !== "" && liContent != null) {
      li.append(liContent);
      ul.appendChild(li);
    } else if (
      liContent == "" ||
      document.onkeyup((e) => {
        if (e.key == "Escape") return true;
      })
    ) {
      break;
    }
  }
}

liMaker();
