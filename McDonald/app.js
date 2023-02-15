"use strict";

const userState = [];

let userLevel = {
  level: "0",
};

const userData = {
  normalHamburger: 0,
  especialHamburger: 0,
  normalHamburgerWithMushrooms: 0,
  especialHamburgerWithMushrooms: 0,
  especialFries: 0,
  normalFries: 0,
  dietCoke: 0,
  coke: 0,
  salad: 0,
  ceasar: 0,
};

const mainData = {
  normalHamburger: 8000,
  especialHamburger: 10000,
  normalHamburgerWithMushrooms: 10000,
  especialHamburgerWithMushrooms: 20000,
  especialFries: 25000,
  normalFries: 10000,
  dietCoke: 6000,
  coke: 5000,
  salad: 8000,
  ceasar: 25000,
  gold: 0.2,
  silver: 0.1,
  bronze: 0.05,
  fee: 0.05,
  noOffer: 0,
};

const cardWrapper = document.getElementById("card-wrapper");
const addBtn = document.querySelectorAll(".add");
const minusBtn = document.querySelectorAll(".minus");
const normalHamburger = document.getElementById("normalHamburger");
const allCards = document.querySelectorAll(".card");
const totalPrice = document.getElementById("totalPrice");
const finalPriceBox = document.getElementById("finalPrice");
const fee = document.getElementById("fee");
const offOutput = document.getElementById("off");
const offBtn = document.getElementById("off-btn");
const offInput = document.getElementById("off-input");
const finalSubmit = document.getElementById("finalSubmit");
const modalBtn = document.getElementById("modal-btn");

// addBtn.forEach((addBtn) =>
//   addBtn.addEventListener("click", (e) => {
//     let amount = e.target.closest("div").nextElementSibling.dataset.amount;
//     userData[amount]++;
//     renderPrices();
//   })
// );

// minusBtn.forEach((minusBtn) => {
//   minusBtn.addEventListener("click", (e) => {
//     let amount = e.target.closest("div").previousElementSibling.dataset.amount;
//     if (userData[amount] > 0) {
//       userData[amount]--;
//       renderPrices();
//     }
//   });
// });

cardWrapper.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("add") ||
    e.target.classList.contains("minus")
  ) {
    if (e.target.classList.contains("add")) {
      let amount = e.target.closest("div").nextElementSibling.dataset.amount;
      userData[amount]++;
      renderPrices();
    }
    if (e.target.classList.contains("minus")) {
      let amount =
        e.target.closest("div").previousElementSibling.dataset.amount;
      if (userData[amount] > 0) {
        userData[amount]--;
        renderPrices();
      }
    }
  }
});

function renderPrices() {
  allCards.forEach((card) => {
    let amount = card.querySelector("div[data-amount]");
    let totalPrice = card.querySelector("div[data-total-price]");
    amount.textContent = userData[amount.dataset.amount];
    totalPrice.textContent = ` ${
      userData[amount.dataset.amount] * mainData[amount.dataset.amount]
    } تومان  `;
  });

  displayFinalPrice();
}

renderPrices();

function displayFinalPrice(offer = "noOffer") {
  let totalPriceObj = 0;
  for (let key in userData) {
    totalPriceObj += userData[key] * mainData[key];
  }
  totalPrice.textContent = `${totalPriceObj} تومان `;
  fee.textContent = `${totalPriceObj * mainData.fee} تومان `;
  finalPriceBox.textContent = ` ${
    totalPriceObj -
    totalPriceObj * mainData.fee -
    totalPriceObj * mainData[offer]
  } تومان`;
  offOutput.textContent = ` ${totalPriceObj * mainData[offer]} تومان`;
  if (offer != "noOffer") {
    offOutput.textContent = ` ${totalPriceObj * mainData[offer]} تومان`;
  }
}

offBtn.addEventListener("click", (e) => {
  switch (offInput.value.toLowerCase()) {
    case "gold":
      displayFinalPrice(offInput.value.toLowerCase());

      userLevel.level = mainData[offInput.value.toLowerCase()];
      offInput.value = "";
      break;
    case "silver":
      displayFinalPrice(offInput.value.toLowerCase());
      userLevel.level = mainData[offInput.value.toLowerCase()];
      offInput.value = "";
      break;
    case "bronze":
      displayFinalPrice(offInput.value.toLowerCase());
      userLevel.level = mainData[offInput.value.toLowerCase()];
      offInput.value = "";
      break;
    default:
      alert("لطفا کد تخفیف را درست وارد کنید");
      break;
  }
});

finalSubmit.addEventListener("click", (e) => {
  let tempState = [];
  tempState.push(userData);
  tempState.push(userLevel);
  userState.push(tempState);
  // clearUser();
  renderPrices();
});

// function clearUser() {
//   for (let prop in userData) {
//     console.log(prop);
//     userData[prop] = 0;
//   }
//   return userData;
// }

// const myModal = document.getElementById("myModal");
// const myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", () => {
//   myInput.focus();
// });
