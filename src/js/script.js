const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-container");
const submitButton = document.getElementById("submit");
const overlay = document.getElementById("overlay");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", (e) => {
  let selected;
  e.preventDefault();
  overlay.style.opacity = 1;
  for (const rate of rates) {
    if (rate.checked) {
      selected = rate.value;
      document.getElementById("rating").innerText = selected;
      break;
    }
  }
});

overlay.addEventListener("transitionend", (e) => {
  overlay.style.opacity = 0;
  mainContainer.classList.add("hidden");
  thanksContainer.classList.remove("hidden");
});
