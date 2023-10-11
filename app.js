// Import Array of items
import { items } from "./items.js";

// Selectors
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const quoteText = document.querySelector(".testimonial__body-text-p");
const authorName = document.querySelector(".testimonial__body-author-name");
const authorRol = document.querySelector(".testimonial__body-author-position");
const authorProfile = document.querySelector(".testimonial__header-profile");

// Functions
let position = 0;

const displayItem = (index) => {
  // Scripting
  // Destructuring variables
  let { quote, image, name, position } = items[index];

  // Render image
  authorProfile.src = image;
  // Render quote
  quoteText.textContent = quote;
  // Render author's name
  authorName.textContent = name;
  // Render author's position
  authorRol.textContent = position;
};

const onNext = () => {
  if (position < items.length - 1) {
    position++;
    displayItem(position);
  }

  return;
};

const onPrev = () => {
  if (position > 0) {
    position--;
    displayItem(position);
  }

  return;
};

// Event Listeners
eventListeners();

function eventListeners() {
  // Prev Button
  btnPrev.addEventListener("click", onPrev);

  // Next Button
  btnNext.addEventListener("click", onNext);
}
